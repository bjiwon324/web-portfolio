import styles from './intro.module.scss'
import classNames from 'classnames/bind'
import LeavesContainer from './leavesContainer';



const cx = classNames.bind(styles)


export default function InTroSection() {
  return (
    <>
      <LeavesContainer>
        <div className={cx('text-box')}>
          <h1 className={cx('name')}>박지원</h1>
          <div className={cx("job-line")}>
            <p className={cx('job')}>Front-end</p>
            <p className={cx('job')}>Desiner</p>
          </div>
        </div>
      </LeavesContainer>
    </>
  )
}