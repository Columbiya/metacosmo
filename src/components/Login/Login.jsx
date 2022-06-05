import React, { useState } from 'react'
import css from './Login.module.scss'
import { Field, Form } from 'react-final-form';
import { composeValidators } from '../../validators/composeValidators';
import { required } from '../../validators/validators';
import authStore from '../../store/authStore';
import Button from '../common/Button/Button';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ADMIN_PATH } from '../../consts';

const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false)

    const onFormSubmit = async (data) => {
        setIsLoading(true)
        authStore.login(data.login, data.password)
        setIsLoading(false)
    }

    if (authStore.isAuth) {
        return <Navigate to={ADMIN_PATH} />
    }

    return (
        <div className={css.wrapper}>
            <Form onSubmit={onFormSubmit} render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit} className={css.form}>
                    <Field name="login" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div className={css.field}>
                                <label>Login</label>
                                <input type='text' placeholder='login' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Field name="password" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div className={css.field}>
                                <label>Password</label>
                                <input type='password' placeholder='password' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Button type="submit" disabled={submitting}>LOGIN</Button>
                </form>
            )}>

            </Form>
        </div>
    )
}

export default observer(Login)