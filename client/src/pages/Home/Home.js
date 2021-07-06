import React from 'react';
import ClassFrame from '../../components/ClassFrame/ClassFrame';
import ModuleFrame from '../../components/ModuleFrame/ModuleFrame';
import { listModulesRequest } from '../../services/module';
import {
    HomeContainer,
    Modules,
    Classes,
    EmptyDiv,
    EmptyImg,
} from './Home.style';

const Home = () => {
    const [modules, setModules] = React.useState([]);
    const [classes, setClasses] = React.useState([]);
    const [showEmpty, setShowEmpty] = React.useState(false);

    React.useEffect(() => {
        async function fetchModules() {
            try {
                const res = await listModulesRequest();
                if (res.data.success) setModules(res.data.modules);
            } catch (error) {}
        }
        fetchModules();
    }, []);

    return (
        <HomeContainer>
            <Modules>
                {modules &&
                    modules.map((module) => (
                        <ModuleFrame
                            key={module._id}
                            module={module}
                            setClasses={setClasses}
                            setShowEmpty={setShowEmpty}
                        />
                    ))}
            </Modules>
            <Classes>
                {classes.length > 0 &&
                    classes.map((_class) => (
                        <ClassFrame key={_class._id} _class={_class} />
                    ))}
            </Classes>
            {showEmpty && (
                <EmptyDiv className="animeRight">
                    <EmptyImg />
                    <p>
                        It seems that no classes were registered in this module,
                        check back later...
                    </p>
                </EmptyDiv>
            )}
        </HomeContainer>
    );
};

export default Home;
