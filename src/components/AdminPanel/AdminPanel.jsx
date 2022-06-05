import React, { useState } from 'react'
import css from './AdminPanel.module.scss'
import { Link, Navigate } from 'react-router-dom'
import { LOGIN_PATH, NEWS_PATH } from '../../consts'
import { ARTICLES_PATH, API_URL } from './../../consts';
import RemovingModal from '../modals/RemovingModal'
import ArticlesModal from '../modals/ArticlesModal'
import NewsModal from '../modals/NewsModal'
import authStore from '../../store/authStore';
import PartnersModal from '../modals/PartnersModal';
import Button from './../common/Button/Button';
import RemovingPartners from '../modals/RemovingPartners';
import CollectionsModal from '../modals/CollectionsModal';
import RemovingCollections from '../modals/RemovingCollections';
import ChangeCollectionsOrder from '../modals/ChangeCollectionsOrder';
import { observer } from 'mobx-react-lite';

const AdminPanel = (props) => {
    const [isNewsShown, setNewsShown] = useState(false)
    const [isArticlesShown, setArticlesShown] = useState(false)
    const [isRemovingShown, setIsRemovingShown] = useState(false)
    const [removePartnersShown, setRemovePartners] = useState(false)
    const [removeCollectionsShown, setRemoveCollections] = useState(false)
    const [isNewsDeleting, setIsNewsDeleting] = useState(false)
    const [isPartnersShown, setPartnersShown] = useState(false)
    const [isCollectionsShown, setCollectionsShown] = useState(false)
    const [changeCollectionOrderShown, setChangeOrderShown] = useState(false)
    const [createInstructionsShown, setInstructionsShown] = useState(false)
    const [removeInstructons, setRemoveInstructions] = useState(false)

    const options = [
        { value: 'light', label: 'light' },
        { value: 'dark', label: 'dark' }
    ]

    const showRemovingArticles = e => {
        setIsNewsDeleting(false)
        setIsRemovingShown(true)
    }

    const showRemovingNews = e => {
        setIsNewsDeleting(true)
        setIsRemovingShown(true)
    }

    const download = e => {
        async function downloadEmails() {
            const response = await fetch(`${API_URL}/email`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (response.status == 200) {
                const blob = await response.blob()
                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.download = 'database.txt'
                document.body.appendChild(link)
                link.click()
                link.remove()
            }

        }

        downloadEmails()
    }

    if (!authStore.isAuth) {
        return <Navigate to={LOGIN_PATH} />
    }

    return (
        <>
            <section className={css.btns}>
                <Button isFilled={true} onClick={() => setNewsShown(true)}>Создать NEWS</Button>
                <Button isFilled={true} onClick={() => setArticlesShown(true)}>Создать ARTICLE</Button>
                <Button isFilled={true} onClick={() => setPartnersShown(true)}>Создать Partner</Button>
                <Button isFilled={true} onClick={() => setCollectionsShown(true)}>Создать Collection</Button>
                <Button isFilled={true} onClick={() => setInstructionsShown(true)}>Создать Instruction</Button>
                <Button isFilled={true} onClick={showRemovingNews}>Удалить News</Button>
                <Button isFilled={true} onClick={showRemovingArticles}>Удалить Article</Button>
                <Button isFilled={true} onClick={() => setRemovePartners(true)}>Удалить Partner</Button>
                <Button isFilled={true} onClick={() => setRemoveCollections(true)}>Удалить Collection</Button>
                <Button isFilled={true} onClick={() => setRemoveInstructions(true)}>Удалить Instruction</Button>
                <Button isFilled={true} onClick={() => setChangeOrderShown(true)}>Изменить порядок Collection</Button>
                <Button isFilled={true} onClick={download}>Выгрузить подписанные emails</Button>
            </section>
            {isNewsShown &&
                <NewsModal onHideModal={() => setNewsShown(false)} options={options} />
            }

            {isArticlesShown &&
                <ArticlesModal onHideModal={() => setArticlesShown(false)} options={options} />
            }

            {isRemovingShown &&
                <RemovingModal onHideModal={() => setIsRemovingShown(false)} isNewsDeleting={isNewsDeleting} />
            }

            {isPartnersShown &&
                <PartnersModal onHideModal={() => setPartnersShown(false)} />
            }

            {removePartnersShown &&
                <RemovingPartners onHideModal={() => setRemovePartners(false)} />
            }

            {isCollectionsShown &&
                <CollectionsModal onHideModal={() => setCollectionsShown(false)} options={options} />
            }

            {removeCollectionsShown &&
                <RemovingCollections onHideModal={() => setRemoveCollections(false)} />
            }

            {changeCollectionOrderShown &&
                <ChangeCollectionsOrder onHideModal={() => setChangeOrderShown(false)} />
            }

            {createInstructionsShown &&
                <CollectionsModal onHideModal={() => setInstructionsShown(false)} isInstructions={true} options={options} />
            }

            {removeInstructons &&
                <RemovingCollections onHideModal={() => setRemoveInstructions(false)} isInstructions={true} />
            }

            <Link to={NEWS_PATH} style={{ color: "black" }}>Перейти на news</Link>
            <br />
            <Link to={ARTICLES_PATH} style={{ color: "black" }}>Перейти на articles</Link>
        </>
    )
}

export default observer(AdminPanel)