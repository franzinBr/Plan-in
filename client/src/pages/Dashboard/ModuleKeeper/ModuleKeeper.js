import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { editClassRequest } from '../../../services/class';

import DroppableModule from './DroppableModule/DroppableModule';
import { ModulesBox } from './ModuleKeeper.style';

const ModuleKeeper = ({ modules, setModules }) => {
    const onDragEnd = async (result) => {
        const { destination, source, reason } = result;

        if (!destination || reason === 'CANCEL') return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        console.log('aaa');

        const moduleSource = Object.assign([], modules[source.droppableId]);
        const moduleDestination = Object.assign(
            [],
            modules[destination.droppableId]
        );
        const classDragged = Object.assign(
            [],
            modules[source.droppableId].classes[source.index]
        );

        try {
            const res = await editClassRequest(classDragged._id, {
                module_id: moduleDestination._id,
            });
            if (!res.data.success) throw new Error(res.data.message);

            moduleSource.classes.splice(source.index, 1);
            moduleDestination.classes.splice(
                destination.index,
                0,
                classDragged
            );

            setModules([...modules, ...moduleSource, ...moduleDestination]);
        } catch (error) {}
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <ModulesBox>
                {modules.map((module, i) => (
                    <DroppableModule
                        key={module._id}
                        module={module}
                        setModules={setModules}
                        i={i}
                    />
                ))}
            </ModulesBox>
        </DragDropContext>
    );
};

export default ModuleKeeper;
