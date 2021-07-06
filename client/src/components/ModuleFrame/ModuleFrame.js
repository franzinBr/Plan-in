import React from 'react';
import { Module } from './ModuleFrame.style';
import { ReactComponent as ModIcon } from '../../assets/module.svg';
import { listClassesFromModuleRequest } from '../../services/class';

const ModuleFrame = ({ module, setClasses, setShowEmpty }) => {
    const handleClick = async () => {
        console.log(module._id);
        try {
            const res = await listClassesFromModuleRequest(module._id);
            if (res.data.success) {
                setClasses(res.data.classes.classes);
                setShowEmpty((empty) =>
                    res.data.classes.classes.length > 0 ? false : true
                );
            }
        } catch (error) {}
    };

    return (
        <Module onClick={handleClick}>
            <div className="img">
                <ModIcon />
            </div>
            <div className="content">
                <h1>{module.name}</h1>
                <p>{module.classQnt} Classes</p>
            </div>
        </Module>
    );
};

export default ModuleFrame;
