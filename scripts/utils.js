class utils {
	static  creatTemplate (container, template) {
	const clone = document.importNode (template, container, true);
	container. appendChild (clone);
	const children = container.children;

	return children[children.lenght-1];

}
}