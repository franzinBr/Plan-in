import React from 'react';

import { Droppable } from 'react-beautiful-dnd';
import { deleteModuleRequest } from '../../../../services/module';
import DraggableClass from '../DraggableClass/DraggableClass';
import {
    ModuleList,
    ModuleInfo,
    ModuleContainer,
    ModuleIcon,
    EditButton,
    DeleteButton,
    Actions,
    AddButton,
} from './DroppableModule.style';
import ModalNewClass from './ModalNewClass/ModalNewClass';
import ModalEditModule from './ModalEditModule/ModalEditModule';

const DroppableModule = ({ module, i, setModules }) => {
    const [showModalEditModule, setShowModalEditModule] = React.useState(false);
    const [showModalNewClass, setShowModalNewClass] = React.useState(false);

    const openModalNewClass = () => {
        setShowModalNewClass(true);
    };

    const openModalEditModule = () => {
        console.log('teste');
        setShowModalEditModule(true);
    };

    const deleteModule = async () => {
        try {
            const res = await deleteModuleRequest(module._id);
            if (!res.data.success) throw new Error(res.data.message);

            setModules((modules) => modules.filter((_, index) => index !== i));
        } catch (error) {}
    };

    return (
        <Droppable droppableId={`${i}`} index={i}>
            {(provided) => (
                <ModuleContainer>
                    <ModuleInfo>
                        <ModuleIcon />
                        <h1>{module.name}</h1>
                        <Actions>
                            <EditButton onClick={openModalEditModule} />
                            <DeleteButton onClick={deleteModule} />
                        </Actions>
                        <AddButton onClick={openModalNewClass} />
                    </ModuleInfo>
                    <ModalNewClass
                        showModal={showModalNewClass}
                        setShowModal={setShowModalNewClass}
                        module={module}
                        index={i}
                        setModules={setModules}
                    />
                    <ModalEditModule
                        showModal={showModalEditModule}
                        setShowModal={setShowModalEditModule}
                        setModules={setModules}
                        module={module}
                    />
                    <ModuleList
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        {module.classes &&
                            module.classes.map((_class, index) => (
                                <DraggableClass
                                    key={_class._id}
                                    _class={_class}
                                    setModules={setModules}
                                    indexModule={i}
                                    index={index}
                                />
                            ))}
                        {provided.placeholder}
                    </ModuleList>
                </ModuleContainer>
            )}
        </Droppable>
    );
};

export default DroppableModule;
