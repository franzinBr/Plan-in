import { useForm } from 'react-hook-form';
import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import { delay } from '../../../../../utils/delay';
import { editClassRequest } from '../../../../../services/class';
import DateTimePicker from '../../../../../components/Form/DateTimePicker/DateTimePicker';
import Input from '../../../../../components/Form/Input/Input';
import Button from '../../../../../components/Form/Button/Button';
import { Form, ErrorForm } from './ModalEditClass.style';
import DateFormatter from '../../../../../utils/DateFormatter';

const ModalEditClass = ({ showModal, setShowModal, _class, setModules }) => {
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const genDate = () => {
        const date = new DateFormatter(_class.date).getFormattedDate('-', 'T');
        return date;
    };

    const onSubmit = async (data) => {
        try {
            const date = new Date(data.date).getTime();
            const res = await editClassRequest(_class._id, {
                name: data.name,
                date,
            });

            if (!res.data.success) throw new Error(res.data.message);

            _class.name = res.data.classEdited.name;
            _class.date = res.data.classEdited.date;
            _class.updatedAt = res.data.classEdited.updatedAt;
            setModules((modules) => [...modules]);
            reset();
            setSuccess(true);
            await delay(500);
            setShowModal(false);
            setSuccess(false);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            reset={reset}
            success={success}
            setError={setError}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Rename Class"
                    type="text"
                    name="name"
                    defaultValue={_class.name}
                    register={register}
                    error={errors['name']}
                />
                <DateTimePicker
                    label="Class Date"
                    name="date"
                    defaultValue={genDate()}
                    register={register}
                    error={errors['date']}
                />
                <Button>Edit</Button>
                {error && <ErrorForm>{error}</ErrorForm>}
            </Form>
        </Modal>
    );
};

export default ModalEditClass;
