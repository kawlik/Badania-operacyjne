import { Graph } from "./graph.ts";

export function DFSi(graph: Graph, input: number, output: number, prev: number[]): boolean {
	const mark = new Array<boolean>(graph.size).fill(false);
	const path = [input];

	mark[input] = true;
	prev[input] = NaN;

	while (path.length > 0) {
		const u = path.pop()!;

		for (let v = 0; v < graph.size; v++) {
			if (mark[v] || !graph.data[u][v]) continue;

			mark[v] = true;
			prev[v] = u;
			path.push(v);
		}
	}

	return mark[output];
}

export function DFSr(graph: Graph, input: number, output: number, prev: number[]): boolean {
	const mark = new Array<boolean>(graph.size).fill(false);

	mark[input] = true;
	prev[input] = NaN;

	(function next(u: number): void {
		mark[u] = true;

		for (let v = 0; v < graph.size; v++) {
			if (mark[v] || !graph.data[u][v]) continue;

			mark[v] = true;
			prev[v] = u;
			next(v);
		}
	})(input);

	return mark[output];
}
