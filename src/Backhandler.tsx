import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, BackHandler, View } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { BackhandlerProps } from "../typings/BackhandlerProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class Backhandler extends Component<BackhandlerProps<CustomStyle>> {
    constructor(props: BackhandlerProps<CustomStyle>){
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    render(): ReactNode {
        return (
        <View></View>
        )
    }

    componentWillMount() {
        if (this.props.disableBack) {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        }  
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        return true;
    }
}

