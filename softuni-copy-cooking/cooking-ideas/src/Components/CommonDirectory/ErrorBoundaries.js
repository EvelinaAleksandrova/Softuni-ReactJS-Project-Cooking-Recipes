import {Component} from 'react';
import "../ErrorPage/ErrorPage.css";
import ErrorPage from "../ErrorPage/ErrorPage";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error) {
        // console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorPage/>

            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;