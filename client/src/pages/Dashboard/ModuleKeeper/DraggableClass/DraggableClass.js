import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
    ClassItem,
    Content,
    Actions,
    EditButton,
    DeleteButton,
    ModalBox,
} from './DraggableClass.style';
import DateFormatter from '../../../../utils/DateFormatter';
import { deleteClassRequest } from '../../../../services/class';
import ModalEditClass from './ModalEditClass/ModalEditClass';

const DraggableClass = ({ _class, index, indexModule, setModules }) => {
    const [showModalEditClass, setShowModalEditClass] = React.useState(false);
    const deleteClass = async () => {
        try {
            const res = await deleteClassRequest(_class._id);
            if (!res.data.success) throw new Error(res.data.message);
            setModules((modules) => {
                modules[indexModule].classes = modules[
                    indexModule
                ].classes.filter((_c, i) => _c._id !== _class._id);

                return [...modules];
            });
        } catch (error) {}
    };

    const openModalEditClass = () => {
        setShowModalEditClass(true);
    };

    const date = new DateFormatter(_class.date);
    return (
        <Draggable draggableId={_class._id} index={index}>
            {(provided) => (
                <>
                    <ClassItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Content>
                            <h1>{_class.name}</h1>
                            <p>{date.getFormattedDate()}</p>
                        </Content>
                        <Actions>
                            <EditButton onClick={openModalEditClass} />
                            <DeleteButton onClick={deleteClass} />
                        </Actions>
                    </ClassItem>
                    <ModalBox>
                        <ModalEditClass
                            showModal={showModalEditClass}
                            setShowModal={setShowModalEditClass}
                            _class={_class}
                            setModules={setModules}
                        />
                    </ModalBox>
                </>
            )}
        </Draggable>
    );
};

export default DraggableClass;
