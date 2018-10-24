import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="loading">
            <ReactLoading type={'spin'} color={'#333333'} height={100} width={100} className="loading-component" />
        </div>
    );

}

export default Loading;