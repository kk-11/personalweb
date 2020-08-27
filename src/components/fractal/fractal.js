import React from 'react';
import s from './fractal.module.sass';

export default function Fractal() {
	return (
		<div className={s.container}>
			<p className={s.nothing}>nothing to see here...</p>
			<div className={s.wrapper}>
				<div className={s.clockwise}>
					<div>
						<div>
							<div>
								<div>
									<div>
										<div>
											<div>
												<div>
													<div>
														<div>
															<div>
																<div></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.aclockwise}>
					<div>
						<div>
							<div>
								<div>
									<div>
										<div>
											<div>
												<div>
													<div>
														<div>
															<div>
																<div></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
