import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import Select from 'react-select'
import collectionsStore from '../../store/collectionsStore'
import instructionsStore from '../../store/instructionsStore'
import { composeValidators } from '../../validators/composeValidators'
import { greaterThanZero, isNumber, required, mustBeDividedWithSymb } from '../../validators/validators'
import css from './Modal.module.scss'

const CollectionsModal = ({ onHideModal, options, isInstructions }) => {
    const [hider, setHider] = useState(options[0])

    const handleAndResetForm = (event, handleSubmit, form) => {
        handleSubmit(event)
        form.restart()
    }

    const onArticlesSubmit = async (data) => {
        try {
            const response = isInstructions ? await instructionsStore.createInstructions({ ...data, hider: hider.value }):
                                             await collectionsStore.createCollection({ ...data, hider: hider.value })
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
            <Form onSubmit={onArticlesSubmit} render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={(event) => handleAndResetForm(event, handleSubmit, form)} className={css.form}>
                    <Field name="name" validate={composeValidators(required, mustBeDividedWithSymb)}>
                        {({ input, meta }) => (
                            <div>
                                <label>name</label>
                                <input type='text' placeholder='name' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    {!isInstructions && 
                    <Field name="order" validate={composeValidators(required, isNumber, greaterThanZero)}>
                        {({ input, meta }) => (
                            <div>
                                <label>order</label>
                                <input type='text' placeholder='order' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>}

                    <Field name="description" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>description</label>
                                <textarea type='text' placeholder='description' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="link" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>link</label>
                                <textarea type='text' placeholder='link' {...input} />
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

                    <Select options={options} defaultValue={options[0]} value={hider} onChange={setHider} />

                    <button type="submit" disabled={submitting}>Create {isInstructions ? 'Instruction': 'Collection'}</button>
                </form>
            )}>

            </Form>
        </div>
    )
}

export default CollectionsModal