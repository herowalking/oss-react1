/**
 * Created by Lincoln on 2019/2/22.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getOpOrder } from '../../../axios/index';
import BreadcrumbCustom from '../../BreadcrumbCustom';

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: []
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <div style={{height:'200px', background: 'yellow'}}>
                                实施单概要
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;