"use client";

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Form, Formik } from 'formik';

export default function Login() {
    return (
        <main className='min-h-screen flex items-center justify-center'>
            <Formik >
                {({ values }: any) => (
                    <Form noValidate>
                        <Input name='email' type='email' required />
                        <Input name='password' type='password' required />

                        <Button type='submit' text="Entrar" className='bg-teal-400 tex-white rounded p-2 cursor-pointer' />
                    </Form>
                )}
            </Formik>
        </main>
    );
}