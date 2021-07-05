import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/Form/Button/Button';
import Input from '../../../components/Form/Input/Input';
import { AuthContext } from '../../../contexts/AuthContext';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { signUp, error, loading } = React.useContext(AuthContext);

    const onSubmit = async (data) => {
        await signUp(data.fullname, data.username, data.email, data.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Name"
                type="text"
                name="fullname"
                register={register}
                error={errors['fullname']}
            />
            <Input
                label="Username"
                type="text"
                name="username"
                register={register}
                error={errors['username']}
            />
            <Input
                label="Email"
                type="text"
                name="email"
                register={register}
                error={errors['email']}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                register={register}
                error={errors['password']}
            />
            {loading ? (
                <Button disabled>Sign Up...</Button>
            ) : (
                <Button>Sign Up</Button>
            )}
            {error && <p className="error">{error}</p>}
        </form>
    );
};

export default SignUp;
