import React from 'react';

const Notification = () => {
    return (
        <div>
            <div className="max-w-xl p-8 mx-auto dark:bg-gray-800 dark:text-gray-100">
	<ul className="space-y-12">
		<li className="flex items-start space-x-3">
			<a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">1</a>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-gray-400">
					<a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
						<span className="group-hover:underline dark:text-gray-100">Student</span>
					</a>
					<span className="text-xs whitespace-nowrap">10h ago</span>
				</div>
				<div>
					<p>Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.</p>
				</div>
			</div>
		</li>
		<li className="flex items-start space-x-3">
			<a rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">2</a>
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between space-x-4 dark:text-gray-400">
					<a rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-700">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
						<span className="group-hover:underline dark:text-gray-100">Guardian</span>
					</a>
					<span className="text-xs whitespace-nowrap">2 weeks ago</span>
				</div>
				<div className="space-y-2">
					<p> Nisi ultrices eu venenatis diam.</p>
					<p>Illum quaerat ab inventore, eveniet repudiandae saepe, iste sed molestias laborum atque, quos reprehenderit fugit cumo!</p>
				</div>
			</div>
		</li>
	</ul>
</div>
        </div>
    );
};

export default Notification;