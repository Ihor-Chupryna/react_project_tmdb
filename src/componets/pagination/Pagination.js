import css from './Pagination.module.css'

const Pagination = ({currentPage, totalPage, setPage}) => {
    const prev = (ev) => {
        ev.preventDefault()
        if (currentPage >= 2) {
            setPage(currentPage - 1)
        }
    }

    const next = () => {
        if (currentPage === totalPage) {
            currentPage = 0
        }
        if (currentPage <= totalPage - 1) {
            setPage(currentPage + 1)
        }
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        setPage(+ev.target.enterPage.value)
        ev.target.reset()
    }

    return (
        <div className={css.pagination}>
            <div>
                <button onClick={prev}>prev</button>
                {currentPage} of {totalPage}
                <button onClick={next}>next</button>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'enterPage'} placeholder={'enter'}/>
                <button>page</button>
            </form>
        </div>
    );
};

export {Pagination};