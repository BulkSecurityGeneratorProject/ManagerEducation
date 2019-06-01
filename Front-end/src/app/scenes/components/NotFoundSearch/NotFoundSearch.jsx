import React, { Component } from 'react';
import styles from './styles.css';
class NotFoundSearch extends Component {
	render() {
		return (
			<div className={`text-center ${styles.notFound}`}>
                <h2>{this.props.name}</h2>
                <br />
                <img src="https://cdn.pixabay.com/photo/2018/05/29/15/53/icons-3439190_960_720.png" style={{maxWidth: '4%'}} />
                <br />
                <span>
                    Hệ thống quản lý đào tạo Google Admin
                    <br />
                    Phiên bản hiện tại:  vv190531-all+40c6816e
                    <br />
                    19:49 31-05-2019
                </span>
                <br />
                <img src="https://png.pngtree.com/svg/20161102/078e54aa9d.svg" style={{height: '160px'}} />
            </div>
		);
	}
}

export default NotFoundSearch;
