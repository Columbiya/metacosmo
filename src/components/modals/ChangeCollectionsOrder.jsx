import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { observer } from 'mobx-react-lite';
import css from './Modal.module.scss'
import collectionsStore from '../../store/collectionsStore';

const RemovingCollections = ({ onHideModal }) => {
    const [options, setOptions] = useState([])
    const [error, setError] = useState(undefined)
    const [isLoading, setLoading] = useState(false)
    const [selectedOption, setSelected] = useState(null)
    const getData = useCallback(async function getData() {
        try {
            setLoading(true)
            const collections = await collectionsStore.getCollections(1, 10000)
            setOptions(collections.map(item => ({value: item.id, label: item.name})))
            setLoading(false)
            return collections
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }, [])
    const [order, setOrder] = useState('')

    const handleChange = selectedOption => {
        setError(undefined)
        setSelected(selectedOption)
    }

    useEffect(() => {
        getData()
    }, [getData])

    const closeModal = e => {
        if (!e.target.classList.contains(css.modal)) return;

        onHideModal()
    }

    const changeOrder = async e => {
        e.preventDefault()

        if (!selectedOption) {
            return setError('Выберите элемент, который хотите удалить')
        }

        if (isNaN(+order) || order <= 0) {
            return setError('Некорректно введен порядок. Порядок - число от 1 до бесконечности')
        }

        const response = await collectionsStore.changeOrder(selectedOption.value, order)
        await getData()

        alert('Изменение порядка произошло успешно')
    } 

    if (options.length && !selectedOption) {
        setSelected(options[0])
    }

    return (
        <section className={css.modal} onMouseDown={closeModal}>
            <form className={css.form} style={{width: '450px'}}>
                {isLoading ? <h1>Loading....</h1> :
                    <>
                        <Select options={options} defaultValue={options[0]} value={selectedOption} onChange={handleChange} />
                        <input type="text" placeholder="order" value={order} onChange={e => setOrder(e.target.value)} />
                        {error && <span style={{color: 'red'}}>{error}</span>}
                        <br />
                        <button type='button' onClick={changeOrder}>Поменять порядок</button>
                    </>
                }

            </form>
        </section>
    )
}

export default observer(RemovingCollections)