/**
 * 3、底部 包含过滤选项
 */

import React from 'react';
import Link from "./Link";

const Footer = () => (
    <ul>
        <Link filter="all">全部</Link>
        <Link filter="active">待办</Link>
        <Link filter="completed">已完成</Link>
    </ul>
)

export default Footer;