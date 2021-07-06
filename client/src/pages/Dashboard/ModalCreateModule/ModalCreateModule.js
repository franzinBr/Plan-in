import React from 'react';
import Button from '../../../components/Form/Button/Button';
import Input from '../../../components/Form/Input/Input';
import Modal from '../../../components/Modal/Modal';
import { Form, ErrorForm } from './ModalCreateModule.style';
import { useForm } from 'react-hook-form';
import { createModulesRequest } from '../../../services/module';
import { delay } from '../../../utils/delay';

const ModalCreateModule = ({ showModal, setShowModal, setModules }) => {
    const [success, setSuccess] = React.useState(null);
    const [error, setError] = React.useState(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await createModulesRequest({ name: data.name });
            if (!res.data.success) throw new Error(res.data.message);

            setModules((modules) => [...modules, res.data.module]);
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
                    label="Module Name"
                    type="text"
                    name="name"
                    register={register}
                    error={errors['name']}
                />
                <Button>Create</Button>
                {error && <ErrorForm>{error}</ErrorForm>}
            </Form>
        </Modal>
    );
};

export default ModalCreateModule;
