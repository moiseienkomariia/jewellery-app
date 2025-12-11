import React from 'react';
import style from './Tag.module.scss';

interface TagProps {
    label: string;
    type: 'active' | 'inactive';
    action?: () => void;
}

const Tag: React.FC<TagProps> = ({label, type, action}) => {
    return (
        <div onClick={action} className={style[type]}>
            {label}
        </div>
    );
};

export default Tag;