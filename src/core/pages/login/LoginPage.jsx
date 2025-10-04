import React from 'react';
import { logEvent } from '../../services/log/logService';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../forms/schemas/loginSchema';

export default function LoginPage() {
    // const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const handleLogin = async (data) => {
        logEvent('INFO', 'user clicked login button');
        console.log(data);
        // dispatch(
        //     login({
        //         user: {
        //             name: 'Adarsh',
        //             email: 'adarsh@gmail.com',
        //             token: 'tijenajdfas',
        //         },
        //     })
        // );
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register('email')} />
                    {errors.email && (
                        <p style={{ color: 'red' }}>{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label>Password:</label>
                    <input type="password" {...register('password')} />
                    {errors.password && (
                        <p style={{ color: 'red' }}>
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
