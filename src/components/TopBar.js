import React from 'react';
import { AppBar, Toolbar, /* 其他导入 */ } from '@mui/material';

function TopBar() {
    return (
        <AppBar position="static" className="topbar">
            <Toolbar>
                {/* 顶部栏的内容 */}
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;