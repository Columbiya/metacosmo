import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import articlesStore from '../../store/articlesStore'
import newsStore from '../../store/newsStore'
import { observer } from 'mobx-react-lite';
import css from './Modal.module.scss'

const RemovingModal = ({ isNewsDeleting, onHideModal }) => {
    const [options, setOptions] = useState([])
    const [error, setError] = useState(undefined)
    const [isLoading, setLoading] = useState(false)
    const [selectedOption, setSelected] = useState(null)

    const handleChange = selectedOption => {
        setError(undefined)
        setSelected(selectedOption)
    }

    useEffect(() => {
        async function getData() {
            try {
                if (isNewsDeleting) {
                    newsStore.limit = 10000
                    newsStore.page = 1
                    setLoading(true)
                    const news = await newsStore.getNews()
                    setLoading(false)
                    setOptions(news.map(option => ({ value: option.title, label: option.title, id: option.id })))
                }
                else {
                    articlesStore.limit = 10000
                    articlesStore.page = 1
                    setLoading(true)
                    const articles = await articlesStore.getArticles()
                    setLoading(false)
                    setOptions(articles.map(option => ({ value: option.title, label: option.title, id: option.id })))
                }
            } catch(e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [isNewsDeleting])

    const closeModal = e => {
        if (!e.target.classList.contains(css.modal)) return;

        onHideModal()
    }

    const remove = async e => {
        e.preventDefault()

        if (!selectedOption) {
            setError('Выберите элемент, который хотите удалить')
            return
        }

        const response = isNewsDeleting ? await newsStore.removeNew(selectedOption.id) :
            await articlesStore.removeArticle(selectedOption.id)

        setOptions(options => options.filter(item => item.id !== selectedOption.id))

        alert('удаление прошло успешно')
    } 

    if (options.length === 0 && selectedOption) {
        setSelected(null)
    }
    
    if (!options.includes(selectedOption) && options.length !== 0) {
        setSelected(options[0])
    }

    return (
        <section className={css.modal} onMouseDown={closeModal}>
            <form className={css.form} style={{width: '450px'}}>
                {isLoading ? <h1>Loading....</h1> :
                    <>
                        <Select options={options} defaultValue={options[0]} value={selectedOption} onChange={handleChange} />
                        {error && <span style={{color: 'red'}}>{error}</span>}
                        <br />
                        <button type='button' onClick={remove}>Удалить</button>
                    </>
                }

            </form>
        </section>
    )
}

export default observer(RemovingModal)