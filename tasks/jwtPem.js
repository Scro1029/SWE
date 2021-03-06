/*
 * Copyright (C) 2016 Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {src, dest} from 'gulp';
import gulpNewer from 'gulp-newer';
import {join} from 'path';
import {dateien, distDir} from '../gulp.config';

export const jwtPem = (done) => {
    'use strict';
    const jwtPath = join(distDir, 'iam', 'service', 'jwt');
    src(dateien.jwtPem)
        .pipe(gulpNewer(jwtPath))
        .pipe(dest(jwtPath));
    done();
};
