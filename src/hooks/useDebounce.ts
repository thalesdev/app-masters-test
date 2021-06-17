import { useEffect } from "react";

export function useDebounce(callback, depsDependency, delay = 1000) {
	useEffect(() => {
		const timer = setTimeout(() => callback(), delay);
		return () => clearTimeout(timer);
	}, [...depsDependency || [], delay]);

}