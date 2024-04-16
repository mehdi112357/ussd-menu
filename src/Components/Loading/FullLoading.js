import React from 'react';
import {Spin} from "antd";

const FullLoading = () => {
    return <Spin spinning={true} fullscreen size='large' />
}

export default FullLoading