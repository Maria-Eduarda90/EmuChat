"use client";

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { initialValuesLogin } from '@/initialValuesFormik/initialValues.login';
import { validationSchemaLogin } from '@/validation/login';
import { Form, Formik } from 'formik';
import Link from 'next/link';

export default function Login() {

    function handleSubmit(e: any) {
        console.log(e)
    }

    return (
        <main className='min-h-screen flex items-center justify-center'>
            <Formik onSubmit={handleSubmit} initialValues={initialValuesLogin} validationSchema={validationSchemaLogin}>
                {({ values }: any) => (
                    <Form noValidate className='flex flex-col gap-2 p-4 border border-zinc-300 min-w-[400px] rounded'>
                        <Input name='email' type='email' required />
                        <Input name='password' type='password' required />

                        <Button type='submit' text="Entrar" className='bg-teal-400 tex-white rounded p-2 cursor-pointer' />
                        <span className=' text-center text-zinc-200'>
                            Não possui uma conta?
                            <strong className='text-zinc-400 ml-1'>
                                <Link href={'/register'}>Inscreva-se</Link>
                            </strong>
                        </span>
                    </Form>
                )}
            </Formik>
        </main>
    );
}