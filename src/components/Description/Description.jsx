import s from './Description.module.css';
const Description = ({name, text}) => {
    return <div><h2 className={s.title}>{name}</h2><p className={s.text}>{text}</p></div>
}

export default Description;