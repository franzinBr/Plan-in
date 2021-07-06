import React from 'react';
import Modal from '../../../../../components/Modal/Modal';

import Button from '../../../../../components/Form/Button/Button';
import Input from '../../../../../components/Form/Input/Input';
import { useForm } from 'react-hook-form';
import { Form, ErrorForm } from './ModalEditModule.style';
import { delay } from '../../../../../utils/delay';
import { editModuleRequest } from '../../../../../services/module';

const ModalEditModule = ({ showModal, setShowModal, setModules, module }) => {
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
            const res = await editModuleRequest(module._id, {
                name: data.name,
            });
            if (!res.data.success) throw new Error(res.data.message);

            module.name = res.data.moduleEdited.name;
            module.updatedAt = res.data.moduleEdited.updatedAt;
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
            onSubmit={handleSubmit(onSubmit)}
            showModal={showModal}
            setShowModal={setShowModal}
            reset={reset}
            success={success}
            setError={setError}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Rename Module"
                    type="text"
                    name="name"
                    defaultValue={module.name}
                    register={register}
                    error={errors['name']}
                />
                <Button>Edit</Button>
                {error && <ErrorForm>{error}</ErrorForm>}
            </Form>
        </Modal>
    );
};

export default ModalEditModule;
