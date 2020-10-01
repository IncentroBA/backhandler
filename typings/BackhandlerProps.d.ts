/**
 * This file was generated from Backhandler.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue } from "mendix";

export interface BackhandlerProps<Style> {
    name: string;
    style: Style[];
    onBack?: ActionValue;
}

export interface BackhandlerPreviewProps {
    class: string;
    style: string;
    onBack: {} | null;
}
