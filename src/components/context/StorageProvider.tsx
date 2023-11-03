import { createContext, memo, useContext, useState } from "react";

export const StorageContext = createContext<any>(null);

const StorageProvider = (props: any) => {
	//loading
	const [isLoading, setIsLoading] = useState(true);

	//popup
	const [popupService, setPopupService] = useState(false);
	const [popupLoginSuccess, setPopupLoginSuccess] = useState(false);
	const [popupCancelService, setPopupCancelService] = useState(false);
	const [popupDeposit, setPopupDeposit] = useState(false);
	const [popupWithdraw, setPopupWithdraw] = useState(false);

	return (
		<StorageContext.Provider
			value={{
				//loading
				isLoading,
				setIsLoading,
				//popup
				popupService,
				setPopupService,
				popupLoginSuccess,
				setPopupLoginSuccess,
				popupCancelService,
				setPopupCancelService,
				popupDeposit,
				setPopupDeposit,
				popupWithdraw,
				setPopupWithdraw,
			}}
			{...props}
		></StorageContext.Provider>
	);
};

export default memo(StorageProvider);

export const useStorage = () => {
	const context = useContext(StorageContext);
	if (!context) {
		throw new Error("useStorage has to be used within <StorageContext.Provider>");
	}
	return context;
};
