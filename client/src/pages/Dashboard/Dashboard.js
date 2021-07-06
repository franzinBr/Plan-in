import React from 'react';
import Button from '../../components/Form/Button/Button';
import { DashB } from './Dashboard.style';
import ModalCreateModule from './ModalCreateModule/ModalCreateModule';
import { useState } from 'react';
import { listModulesAllRequest } from '../../services/module';
const ModuleKeeper = React.lazy(() => import('./ModuleKeeper/ModuleKeeper'));

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [modules, setModules] = React.useState([]);

    React.useEffect(() => {
        async function fetchModules() {
            try {
                const res = await listModulesAllRequest();
                if (res.data.success) setModules(res.data.modules);
            } catch (error) {}
        }
        fetchModules();
    }, []);

    const controlModal = () => {
        setShowModal((modal) => !modal);
    };

    return (
        <DashB>
            <section className="moduleCreator">
                <Button onClick={controlModal}>Create Module</Button>
                <ModalCreateModule
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setModules={setModules}
                />
            </section>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="modules">
                    {modules && (
                        <ModuleKeeper
                            modules={modules}
                            setModules={setModules}
                        />
                    )}
                </section>
            </React.Suspense>
        </DashB>
    );
};

export default Dashboard;
