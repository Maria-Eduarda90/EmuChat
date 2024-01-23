"use client";

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { initialValuesRegister } from '@/initialValuesFormik/initialValues.register';
import { validationSchemaRegister } from '@/validation/register';

import { Form, Formik } from 'formik';
import Link from 'next/link';

export default function Register() {

    function handleSubmit(e: any) {
        console.log(e)
    }

    return (
        <main className='min-h-screen flex items-center justify-center'>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValuesRegister}
                validationSchema={validationSchemaRegister}
            >
                {({ values }: any) => (
                    <Form noValidate className='flex flex-col gap-2 p-4 border border-zinc-300 min-w-[400px] rounded'>
                        <Input name='name' type='text' required />
                        <Input name='email' type='email' required />
                        <Input name='password' type='password' required />

                        <Button type='submit' text="Entrar" className='bg-teal-400 tex-white rounded p-2 cursor-pointer' />
                        <span className=' text-center text-zinc-200'>
                            Não possui uma conta?
                            <strong className='text-zinc-400 ml-1'>
                                <Link href={'/login'}> Entre</Link>
                            </strong>
                        </span>
                    </Form>
                )}
            </Formik>
        </main>
    );
}