import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import Select from 'react-select'
import articlesStore from '../../store/articlesStore'
import { composeValidators } from '../../validators/composeValidators'
import { required } from '../../validators/validators'
import css from './Modal.module.scss'

const ArticlesModal = ({ onHideModal, options }) => {
    const [hider, setHider] = useState(options[0])

    const handleAndResetForm = (event, handleSubmit, form) => {
        handleSubmit(event)
        form.restart()
    }

    const onArticlesSubmit = async (data) => {
        try {
            const response = await articlesStore.createArticle({ ...data, hider: hider.value })
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
                    <Field name="title" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Title</label>
                                <input type='text' placeholder='title' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="quote" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Quote</label>
                                <input type='text' placeholder='quote' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="boldText" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>bold text</label>
                                <textarea type='text' placeholder='bold text' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="text" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>Text under the bold text</label>
                                <textarea type='text' placeholder='text under the bold text' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="twoColumnTextFirst" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>two column text, first column</label>
                                <textarea type='text' placeholder='two column text, first column' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="twoColumnTextSecond" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>two column text, second column</label>
                                <textarea type='text' placeholder='two column text, second column' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="oneColumnContent" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>one column text, under the two column text</label>
                                <textarea type='text' placeholder='one column text, under the two column text' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="address" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>adress of site source</label>
                                <input type='text' placeholder='adress of site source' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Field name="author" validate={composeValidators(required)}>
                        {({ input, meta }) => (
                            <div>
                                <label>author</label>
                                <input type='text' placeholder='author' {...input} />
                                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                                {input.value.length + ' символов'}
                            </div>
                        )}
                    </Field>

                    <Select options={options} defaultValue={options[0]} value={hider} onChange={setHider} />

                    <button type="submit" disabled={submitting}>Create article</button>
                </form>
            )}>

            </Form>
        </div>
    )
}

export default ArticlesModal