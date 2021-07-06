import React from 'react';
import Modal from '../../../../../components/Modal/Modal';
import { Form, ErrorForm } from './ModalNewClass.style';
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Form/Button/Button';
import Input from '../../../../../components/Form/Input/Input';
import DateTimePicker from '../../../../../components/Form/DateTimePicker/DateTimePicker';
import { delay } from '../../../../../utils/delay';
import { createClassRequest } from '../../../../../services/class';

const ModalNewClass = ({
    showModal,
    setShowModal,
    module,
    index,
    setModules,
}) => {
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const date = new Date(data.date).getTime();
            const res = await createClassRequest({
                name: data.name,
                module_id: module._id,
                date,
            });

            if (!res.data.success) throw new Error(res.data.message);
            module.classes.push(res.data.class);
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
                    label="Class Name"
                    type="text"
                    name="name"
                    register={register}
                    error={errors['name']}
                />
                <DateTimePicker
                    label="Class Date"
                    name="date"
                    register={register}
                    error={errors['date']}
                />
                <Button>New Class</Button>
                {error && <ErrorForm>{error}</ErrorForm>}
            </Form>
        </Modal>
    );
};

export default ModalNewClass;
