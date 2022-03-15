import j from './Job.module.css'
import b from "../common/styles/Container.module.css";

export const Job = () => {
    return (
        <div className={j.jobBlock}>
            <div className={`${b.container} ${j.addFlex}`}>
                <div className={j.jobMain}>
                    <h2>Рассматриваю варианты удаленной работы</h2>
                    <button>Нанять меня</button>
                </div>

            </div>
        </div>
    );
};
