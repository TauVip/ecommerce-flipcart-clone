import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions'
import './style.css'

const MenuHeader = () => {
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const renderCategories = categories => {
    let myCategories = []
    for (let category of categories) {
      myCategories.push(
        <li key={category._id}>
          {category.parentId ? (
            <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a>
          ) : (
            <span>{category.name}</span>
          )}
          {category.children.length > 0 && (
            <ul>{renderCategories(category.children)}</ul>
          )}
        </li>
      )
    }
    return myCategories
  }

  return (
    <div className='menuHeader'>
      <ul>
        {category.categories.length > 0 &&
          renderCategories(category.categories)}
      </ul>
    </div>
  )
}

export default MenuHeader
