import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { mappedRoutes } from '../components/ui/header';

interface Props {
    activeTab: number
    setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

export const useSetInitialActiveTab = ({activeTab, setActiveTab}: Props) => {
    const history = useHistory();

    const [url, setUrl] = useState<string>();
    
    history.listen((location) => {
        setUrl(location.pathname);
    });

    useEffect(() => {
        for (let {navbarValue, url} of Object.values(mappedRoutes)) {
            if (window.location.pathname === url) {
                setActiveTab(navbarValue);
                break;
            }
        }
    }, [setActiveTab, activeTab, url]);
}