import React, { useState, useEffect } from 'react';


class CountDown extends React.Component {

    state = {
        count: 10,
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    componentDidMount() {
        // setTimeout(()=>{

        // },10000)

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                this.props.onTimesUp();
            }
        }
    }

    render() {
        return (
            <div className="a">{this.state.count}</div>
        );
    }
}


const NewCountDown = (props) => {
    const [count, setCount] = useState(10)

    useEffect(() => {

        if (count === 0) {
            return;
        }

        let timer = setInterval(() => {
            console.log("run this");
            setCount(count - 1);
        }, 1000)

        return () => {
            clearInterval(timer)
        }
        
    }, [count])
    return (
        <div>{count}s Hook</div>
    )
}

export { CountDown, NewCountDown };