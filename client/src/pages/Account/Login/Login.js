import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Form/Button/Button';
import Input from '../../../components/Form/Input/Input';
import { AuthContext } from '../../../contexts/AuthContext';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { login, error, loading } = React.useContext(AuthContext);

    const onSubmit = async (data) => {
        await login(data.userOrEmail, data.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="User/Email"
                type="text"
                name="userOrEmail"
                register={register}
                error={errors['userOrEmail']}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                register={register}
                error={errors['password']}
            />
            {loading ? (
                <Button disabled>Login...</Button>
            ) : (
                <Button>Login</Button>
            )}
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default Login;
