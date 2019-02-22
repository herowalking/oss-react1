/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getOpOrder } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';
import OpOrderSummary from './orderComponents/OpOrderSummary'
import OpOrderResource from './orderComponents/OpOrderResource'

const columns = [{
    title: '任务单',
    dataIndex: 'requestId',
    width: 100,
    render: (text, record) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>
}, {
    title: '订单',
    dataIndex: 'orderId',
    width: 80
}, {
    title: '客户',
    dataIndex: 'custName',
    width: 80
}, {
    title: '产品',
    dataIndex: 'productName',
    width: 200
}];

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: []
    };
    componentDidMount() {
        console.log(this.props.match.params);
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
                <BreadcrumbCustom first="任务" second="待领任务详情" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="待领任务详情" bordered={false}>

                                <OpOrderSummary />

                                <OpOrderResource />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;