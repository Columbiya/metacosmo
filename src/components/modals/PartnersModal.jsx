import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import Select from 'react-select'
import partnersStore from '../../store/partnersStore';
import { composeValidators } from '../../validators/composeValidators';
import { mustBeDividedWithSymb, required } from '../../validators/validators';
import css from './Modal.module.scss'

const PartnersModal = ({ onHideModal }) => {
    const handleAndResetForm = (event, handleSubmit, form) => {
        handleSubmit(event)
        form.restart()
    }

    const onSubmit = async (data) => {
        try {
            const response = await partnersStore.createPartner({...data})
            onHideModal()
        } catch (e) {
            console.log(e)
        }
    }

    const closeModal = e => {
        if (!e.target.classList.contains(css.modal)) return;

        onHideModal()
    }

    return (
        <div className={css.modal} onMouseDown={closeModal}>
            <Form onSubmit={onSubmit} render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={(event) => handleAndResetForm(event, handleSubmit, form)} className={css.form}>
                    <Field name="link" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Partner`s Link</label>
                                <input type='text' placeholder='link' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="img" validate={composeValidators(required)}>
                        {({ input: { value, onChange, ...input }, meta }) => (
                            <div>
                                <label>Image</label>
                                <input type='file' placeholder='File' {...input} onChange={({ target }) => onChange(target.files)} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <button type="submit" disabled={submitting}>Create partner</button>
                </form>
            )}>

            </Form>
        </div>
    )
}

export default PartnersModal