import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { observer } from 'mobx-react-lite';
import css from './Modal.module.scss'
import collectionsStore from '../../store/collectionsStore';
import instructionsStore from '../../store/instructionsStore';

const RemovingCollections = ({ onHideModal, isInstructions }) => {
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
                setLoading(true)
                const partners = isInstructions ? await instructionsStore.getInstructions(1, 10000):
                                                  await collectionsStore.getCollections(1, 10000)
                setLoading(false)
                setOptions(partners.map(option => ({ value: option.id, label: option.name })))
            } catch(e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

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

        const response = isInstructions ? await instructionsStore.removeCollection(selectedOption.value):
                                          await collectionsStore.removeCollection(selectedOption.value)

        setOptions(options => options.filter(item => item.value != selectedOption.value))

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

export default observer(RemovingCollections)