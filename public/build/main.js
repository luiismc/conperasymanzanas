webpackJsonp([13],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_TvShow__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.addUser = function (user) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(user.uid)
                .set({
                name: user.displayName,
                picture: user.photoURL
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsMoviePartOfMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                moviesFollowedSnapshot.forEach(function (doc) {
                    if (doc.id === movieId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addMovieToMyList = function (userId, movie) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movie.movieId)
                .set({
                movieId: movie.movieId,
                name: movie.name,
                picture: movie.picture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeMovieFromMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movieId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsTvShowPartOfMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    if (doc.id === tvShowId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addTvShowToMyList = function (userId, tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShow.tvShowId)
                .set({
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeTvShowFromMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShowId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteMovies = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                var favoriteMovies = [];
                moviesFollowedSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    favoriteMovies.push(movie);
                });
                resolve({ favoriteMovies: favoriteMovies });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteTvShows = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                var favoriteTvShows = [];
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_3__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    favoriteTvShows.push(tvShow);
                });
                resolve({ favoriteTvShows: favoriteTvShows });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=UserService.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ComingSoonService__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingSoonPage = (function () {
    function ComingSoonPage(loadingCtrl, comingSoonService) {
        this.loadingCtrl = loadingCtrl;
        this.comingSoonService = comingSoonService;
        this.loaded = false;
        this.comingSoonList = [];
    }
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ComingSoonPage");
        this.getComingSoon();
    };
    ComingSoonPage.prototype.getComingSoon = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Loading Coming Soon..."
        });
        loading.present();
        this.comingSoonService.getComingSoon().then(function (result) {
            _this.comingSoonList = result.comingSoonList;
            _this.loaded = true;
            loading.dismiss();
        });
    };
    ComingSoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-coming-soon",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\coming-soon\coming-soon.html"*/'<ion-content padding fullscreen>\n  <ion-list no-lines *ngIf="comingSoonList.length > 0">\n    <ion-item *ngFor="let comingSoon of comingSoonList">\n      <img src="{{ comingSoon.picture }}">\n\n      <ion-row>\n        <ion-col col-8>\n          <p class="item-title">{{ comingSoon.name }}</p>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button clear color="netflixWhite">\n            <ion-icon name=\'md-add\'></ion-icon>\n            <p>My List</p>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <p class="item-summary line-break">{{ comingSoon.description }}</p>\n      </ion-row>\n\n      <ion-row>\n        <p class="coming-date">{{ comingSoon.releaseDate }}</p>\n      </ion-row>\n\n      <br>\n    </ion-item>\n  </ion-list>\n\n  <ion-row style="margin-top: 50%;" *ngIf="loaded && comingSoonList.length <= 0">\n    <ion-col text-center>\n      <img class="demo-image" src="assets/netflix-icon.png">\n      <p class="demo-message">There are no items yet.</p>\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own coming soon items here!</p>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\coming-soon\coming-soon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_ComingSoonService__["a" /* ComingSoonService */]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DownloadService__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadsPage = (function () {
    function DownloadsPage(downloadService, alertCtrl, streamingMedia) {
        this.downloadService = downloadService;
        this.alertCtrl = alertCtrl;
        this.streamingMedia = streamingMedia;
        this.downloadType = "movies";
        this.hasAnyDownloads = false;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DownloadsPage");
    };
    DownloadsPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter DownloadsPage");
        this.loadDownloads();
    };
    DownloadsPage.prototype.loadDownloads = function () {
        var _this = this;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
        this.hasAnyDownloads =
            this.downloadService.moviesDownloaded.length > 0 ||
                this.downloadService.episodesDownloaded.length > 0;
        this.downloadService.moviesDownloaded.forEach(function (movie) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = movie.movieId;
            downloadItem.name = movie.name;
            downloadItem.picture = movie.picture;
            downloadItem.isMovie = true;
            downloadItem.downloadUrl = movie.downloadUrl;
            _this.movieDownloadItems.push(downloadItem);
        });
        this.downloadService.episodesDownloaded.forEach(function (episode) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = episode.episodeId;
            downloadItem.name = episode.name;
            downloadItem.picture = episode.picture;
            downloadItem.isMovie = false;
            downloadItem.downloadUrl = episode.downloadUrl;
            _this.episodesDownloadItems.push(downloadItem);
        });
    };
    DownloadsPage.prototype.goToAvailableDownloads = function () {
        // this.navCtrl.push("HorizontalListPage", { title: "Available Downloads" });
    };
    DownloadsPage.prototype.playMovie = function (movieDownloadItem) {
        if (movieDownloadItem.downloadUrl === "") {
            var alert_1 = this.alertCtrl.create({
                title: "This movie has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the movie and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(movieDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.playEpisode = function (episodeDownloadItem) {
        if (episodeDownloadItem.downloadUrl === "") {
            var alert_2 = this.alertCtrl.create({
                title: "This episode has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the episode and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_2.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(episodeDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.deleteMovie = function (movieDownloadItem) {
        this.presentMovieDeleteConfirm(movieDownloadItem);
    };
    DownloadsPage.prototype.presentMovieDeleteConfirm = function (movieDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded movie.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteMovie(movieDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.movieDownloadItems.indexOf(movieDownloadItem);
                            if (index > -1) {
                                _this.movieDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage.prototype.deleteEpisode = function (episodesDownloadItems) {
        this.presentEpisodeDeleteConfirm(episodesDownloadItems);
    };
    DownloadsPage.prototype.presentEpisodeDeleteConfirm = function (episodeDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded episode.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteEpisode(episodeDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.episodesDownloadItems.indexOf(episodeDownloadItem);
                            if (index > -1) {
                                _this.episodesDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-downloads",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\downloads\downloads.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Downloads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="smart-downloads-row">\n    <ion-col col-10>\n      <ion-row>\n        <p class="item-title">Smart Downloads</p>\n      </ion-row>\n      <ion-row>\n        <p class="item-sub-title">Completed episodes will be deleted and replaced with the next episodes, only on Wi-Fi.</p>\n      </ion-row>\n    </ion-col>\n\n    <ion-col col-2>\n      <ion-toggle checked="false" color="netflixRed"></ion-toggle>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="!hasAnyDownloads" class="movies-shows-row">\n    <ion-col text-center>\n      <button ion-button clear color="netflixWhite">\n        <ion-icon name=\'md-download\'></ion-icon>\n      </button>\n\n      <p>Movies and TV show that you download appear here.</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="!hasAnyDownloads" class="find-downloads-row">\n    <ion-col text-center>\n      <button ion-button icon-start color="netflixWhite" (click)="goToAvailableDownloads()">\n        FIND SOMETHING TO DOWNLOAD\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="hasAnyDownloads">\n    <div padding>\n      <ion-segment color="netflixRed" [(ngModel)]="downloadType">\n        <ion-segment-button value="movies">\n          Movies\n        </ion-segment-button>\n\n        <ion-segment-button value="tvShows">\n          Tv Shows\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="downloadType">\n      <div *ngSwitchCase="\'movies\'">\n        <ion-list>\n          <ion-item *ngFor="let movieDownloadItem of movieDownloadItems">\n            <img item-start src="{{movieDownloadItem.picture}}">\n\n            <ion-row>\n              <ion-col text-center>\n                <p class="ellipsis">{{movieDownloadItem.name}}</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col text-center>\n                <button (click)="playMovie(movieDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-play"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col text-center>\n                <button (click)="deleteMovie(movieDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div *ngSwitchCase="\'tvShows\'">\n        <ion-list>\n          <ion-item *ngFor="let episodesDownloadItem of episodesDownloadItems">\n            <img item-start src="{{episodesDownloadItem.picture}}">\n\n            <ion-row>\n              <ion-col text-center>\n                <p class="ellipsis">{{episodesDownloadItem.name}}</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col text-center>\n                <button (click)="playEpisode(episodesDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-play"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col text-center>\n                <button (click)="deleteEpisode(episodesDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\downloads\downloads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_TvShow__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Category__ = __webpack_require__(426);




var CategoriesService = (function () {
    function CategoriesService() {
    }
    CategoriesService.prototype.getCategories = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .get()
                .then(function (categoriesSnapshot) {
                var categories = [];
                categoriesSnapshot.forEach(function (doc) {
                    var category = new __WEBPACK_IMPORTED_MODULE_3__data_Category__["a" /* Category */](doc.data().name);
                    category.categoryId = doc.id;
                    categories.push(category);
                });
                resolve({ categories: categories });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryMovies = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .get()
                .then(function (categoryMoviesSnapshot) {
                var categoryMovies = [];
                categoryMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    movie.categoryMovieId = doc.id;
                    movie.movieId = doc.data().movieId;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    categoryMovies.push(movie);
                });
                resolve({ categoryMovies: categoryMovies });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryTvShows = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .get()
                .then(function (categoryTvShowsSnapshot) {
                var categoryTvShows = [];
                categoryTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_1__data_TvShow__["a" /* TvShow */]();
                    tvShow.categoryTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    categoryTvShows.push(tvShow);
                });
                resolve({ categoryTvShows: categoryTvShows });
            });
        });
        return promise;
    };
    return CategoriesService;
}());

//# sourceMappingURL=CategoriesService.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService() {
    }
    MoviesService.prototype.getMovie = function (movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .doc(movieId)
                .get()
                .then(function (doc) {
                var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                movie.movieId = doc.id;
                movie.name = doc.data().name;
                movie.picture = doc.data().picture;
                movie.detailsPicture = doc.data().detailsPicture;
                movie.releaseYear = doc.data().releaseYear;
                movie.rating = doc.data().rating;
                movie.description = doc.data().description;
                movie.videoUrl = doc.data().videoUrl;
                resolve({ movie: movie });
            });
        });
        return promise;
    };
    MoviesService.prototype.getAllMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.detailsPicture = doc.data().detailsPicture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService.prototype.getRecentlyAddedMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .limit(12)
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.detailsPicture = doc.data().detailsPicture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MoviesService);
    return MoviesService;
}());

//# sourceMappingURL=MoviesService.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, app, loadingCtrl, zone, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.authService = authService;
        this.userName = "";
        this.userPicture = "";
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userName = user.displayName;
            _this.userPicture = user.photoURL;
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProfilePage");
    };
    ProfilePage.prototype.goToUsers = function () {
        this.navCtrl.push("UsersPage");
    };
    ProfilePage.prototype.goToNotifications = function () {
        this.navCtrl.push("NotificationsPage");
    };
    ProfilePage.prototype.goToMyList = function () {
        this.navCtrl.push("MylistPage");
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push("SettingsPage");
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging out..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-row (click)="goToUsers()">\n        <ion-col *ngIf="userPicture == null" text-center col-2>\n          <img src="assets/imgs/netflix-avatar.png">\n        </ion-col>\n\n        <ion-avatar *ngIf="userPicture != null" text-center col-2>\n          <img class="round-image" src="{{userPicture}}">\n        </ion-avatar>\n\n        <ion-col col-8>\n          <p *ngIf="userName == null">Mr John Doe</p>\n          <p *ngIf="userName != null">{{userName}}</p>\n        </ion-col>\n\n        <ion-col text-center col-2>\n          <ion-icon name="md-repeat" item-end></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="top-menu-list">\n    <ion-item (click)="goToNotifications()">\n      <ion-icon name="md-notifications" item-start></ion-icon>\n      <p>Notifications</p>\n    </ion-item>\n\n    <ion-item (click)="goToMyList()">\n      <ion-icon name="md-checkmark" item-start></ion-icon>\n      <p>My List</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines class="user-menu-list">\n    <ion-item (click)="goToSettings()">\n      <p>App Settings</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Account</p>\n    </ion-item>\n\n    <ion-item>\n      <p>About</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Help</p>\n    </ion-item>\n\n    <ion-item (click)="signOut()">\n      <p>Sign Out</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_TvShowsService__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__ = __webpack_require__(712);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = (function () {
    function SearchPage(navCtrl, categoriesService, moviesService, tvShowsService) {
        this.navCtrl = navCtrl;
        this.categoriesService = categoriesService;
        this.moviesService = moviesService;
        this.tvShowsService = tvShowsService;
        this.categories = [];
        this.loaded = false;
        this.isSearching = false;
        this.searchDone = false;
        this.searchValue = "";
        this.searchItems = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SearchPage");
        this.listenForSearchInput(500);
        this.getCategories();
    };
    SearchPage.prototype.listenForSearchInput = function (timeoutTime) {
        var _this = this;
        var searchInput = (document.getElementById("searchInput"));
        var timeout = null;
        searchInput.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.search(_this.searchValue);
            }, timeoutTime);
        };
    };
    SearchPage.prototype.search = function (searchValue) {
        var _this = this;
        this.isSearching = true;
        if (searchValue !== "" && searchValue.length >= 3) {
            this.searchItems = [];
            // Search movies first
            this.moviesService.getAllMovies().then(function (result) {
                result.movies.forEach(function (movie) {
                    if (movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                        var searchItem = new __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__["a" /* SearchItem */]();
                        searchItem.itemId = movie.movieId;
                        searchItem.name = movie.name;
                        searchItem.picture = movie.picture;
                        searchItem.isMovie = true;
                        _this.searchItems.push(searchItem);
                    }
                });
                // Then search tv shows
                _this.tvShowsService.getAllTvShows().then(function (result) {
                    result.tvShows.forEach(function (tvShow) {
                        if (tvShow.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                            var searchItem = new __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__["a" /* SearchItem */]();
                            searchItem.itemId = tvShow.tvShowId;
                            searchItem.name = tvShow.name;
                            searchItem.picture = tvShow.picture;
                            searchItem.isMovie = false;
                            _this.searchItems.push(searchItem);
                        }
                    });
                    _this.searchDone = true;
                });
            });
        }
        else if (searchValue === "") {
            this.clearSearch();
        }
    };
    SearchPage.prototype.onClear = function (event) {
        this.clearSearch();
    };
    SearchPage.prototype.clearSearch = function () {
        this.isSearching = false;
        this.searchDone = false;
        this.searchItems = [];
    };
    SearchPage.prototype.goToSearchItem = function (searchItem) {
        if (searchItem.isMovie) {
            this.navCtrl.push("MovieDetailsPage", { movieId: searchItem.itemId });
        }
        else {
            this.navCtrl.push("ShowDetailsPage", { tvShowId: searchItem.itemId });
        }
    };
    SearchPage.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().then(function (result) {
            _this.categories = result.categories;
            _this.loaded = true;
        });
    };
    SearchPage.prototype.openCategory = function (category) {
        this.navCtrl.push("GridListPage", { category: category });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-search",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\search\search.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-10>\n        <ion-searchbar id="searchInput" [(ngModel)]="searchValue" placeholder="Search" (ionClear)="onClear($event)"></ion-searchbar>\n      </ion-col>\n\n      <ion-col col-2 text-center>\n        <button ion-button clear item-end>\n          <ion-icon name="md-mic"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngIf="!loaded || (isSearching && !searchDone)">\n    <ion-col text-center>\n      <br>\n      <ion-spinner color="netflixRed"></ion-spinner>\n    </ion-col>\n  </ion-row>\n\n  <ion-list *ngIf="loaded && !isSearching" no-lines>\n    <ion-item ion-item *ngFor="let category of categories" (click)="openCategory(category)" clear text-center>\n      {{category.name}}\n    </ion-item>\n  </ion-list>\n\n  <ion-row *ngIf="isSearching && searchItems.length > 0" style="padding-left: 0px;">\n    <ion-col col-4 *ngFor="let searchItem of searchItems">\n      <img src="{{searchItem.picture}}" (click)="goToSearchItem(searchItem)" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="isSearching && searchDone && searchItems.length <= 0">\n    <ion-col text-center>\n      <img class="demo-image" src="assets/netflix-icon.png">\n      <p class="demo-message">No results.</p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_TvShowsService__["a" /* TvShowsService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_TvShow__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Season__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Episode__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowsService = (function () {
    function TvShowsService() {
    }
    TvShowsService.prototype.getAllTvShows = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (tvShowsSnapshot) {
                var tvShows = [];
                tvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.detailsPicture = doc.data().detailsPicture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    tvShows.push(tvShow);
                });
                resolve({ tvShows: tvShows });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getTvShow = function (tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShowId)
                .get()
                .then(function (doc) {
                var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                tvShow.tvShowId = doc.id;
                tvShow.name = doc.data().name;
                tvShow.picture = doc.data().picture;
                tvShow.detailsPicture = doc.data().detailsPicture;
                tvShow.releaseYear = doc.data().releaseYear;
                tvShow.rating = doc.data().rating;
                tvShow.description = doc.data().description;
                resolve({ tvShow: tvShow });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getSeasons = function (tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (tvShowSeasonsSnapshot) {
                var tvShowSeasons = [];
                tvShowSeasonsSnapshot.forEach(function (doc) {
                    var season = new __WEBPACK_IMPORTED_MODULE_3__data_Season__["a" /* Season */]();
                    season.seasonId = doc.id;
                    season.name = doc.data().name;
                    season.tvShowId = doc.data().tvShowId;
                    season.tvShowName = doc.data().tvShowName;
                    tvShowSeasons.push(season);
                });
                resolve({ tvShowSeasons: tvShowSeasons });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.getEpisodes = function (tvShow, season) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (episodesSnapshot) {
                var seasonEpisodes = [];
                episodesSnapshot.forEach(function (doc) {
                    var episode = new __WEBPACK_IMPORTED_MODULE_4__data_Episode__["a" /* Episode */]();
                    episode.episodeId = doc.id;
                    episode.name = doc.data().name;
                    episode.description = doc.data().description;
                    episode.picture = doc.data().picture;
                    episode.seasonId = doc.data().seasonId;
                    episode.seasonName = doc.data().seasonName;
                    episode.tvShowId = doc.data().tvShowId;
                    episode.tvShowName = doc.data().tvShowName;
                    episode.videoUrl = doc.data().videoUrl;
                    seasonEpisodes.push(episode);
                });
                resolve({ seasonEpisodes: seasonEpisodes });
            });
        });
        return promise;
    };
    TvShowsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TvShowsService);
    return TvShowsService;
}());

//# sourceMappingURL=TvShowsService.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coming-soon/coming-soon.module": [
		734,
		12
	],
	"../pages/downloads/downloads.module": [
		735,
		11
	],
	"../pages/grid-list/grid-list.module": [
		736,
		2
	],
	"../pages/horizontal-list/horizontal-list.module": [
		737,
		8
	],
	"../pages/movie-details/movie-details.module": [
		738,
		7
	],
	"../pages/mylist/mylist.module": [
		739,
		1
	],
	"../pages/notifications/notifications.module": [
		740,
		0
	],
	"../pages/profile/profile.module": [
		741,
		10
	],
	"../pages/search/search.module": [
		742,
		9
	],
	"../pages/settings/settings.module": [
		743,
		6
	],
	"../pages/show-details/show-details.module": [
		744,
		5
	],
	"../pages/sign-in/sign-in.module": [
		334
	],
	"../pages/sign-up/sign-up.module": [
		335
	],
	"../pages/users/users.module": [
		745,
		4
	],
	"../pages/video-playback/video-playback.module": [
		746,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingSoonService = (function () {
    function ComingSoonService() {
    }
    ComingSoonService.prototype.getComingSoon = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("comingSoon")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (comingSoonSnapshot) {
                var comingSoonList = [];
                comingSoonSnapshot.forEach(function (doc) {
                    var comingSoon = new __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__["a" /* ComingSoon */]();
                    comingSoon.comingSoonId = doc.id;
                    comingSoon.name = doc.data().name;
                    comingSoon.picture = doc.data().picture;
                    comingSoon.description = doc.data().description;
                    comingSoon.releaseDate = doc.data().releaseDate;
                    comingSoonList.push(comingSoon);
                });
                resolve({ comingSoonList: comingSoonList });
            });
        });
        return promise;
    };
    ComingSoonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ComingSoonService);
    return ComingSoonService;
}());

//# sourceMappingURL=ComingSoonService.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = (function () {
    function SignUpPage(navCtrl, authService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.signUpSegment = "cancel";
        this.registerData = { email: "", password: "", password2: "" };
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignUpPage");
    };
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.push("SignInPage");
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Singing up..."
        });
        loading.present();
        this.authService
            .registerUser(this.registerData.email, this.registerData.password, this.registerData.password2)
            .then(function (x) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: "Sign Up Error",
                subTitle: error.message,
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sign-up",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button class="navbar-button" ion-button clear (click)="signIn()">SIGN IN</button>\n\n      <button class="navbar-button" ion-button clear></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="image">\n\n    <img src="assets/imgs/netflix-signup.png">\n\n  </div>\n\n\n\n  <ion-row style="margin-top: -60px;">\n\n    <ion-col text-center>\n\n      <p class="title">See what\'s next.</p>\n\n      <p class="subtitle">WATCH ANYWHERE. CANCEL AT ANY TIME.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <br>\n\n\n\n  <ion-row>\n\n    <p class="sign-up-title">Sign up</p>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="text" [(ngModel)]="registerData.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="registerData.password"></ion-input>\n\n    </ion-item>\n\n\n\n    <button class="signup-button" color="netflixRed" ion-button round full (click)="signUp()">SIGN UP</button>\n\n  </ion-row>\n\n\n\n  <br>\n\n\n\n  <div padding>\n\n    <ion-segment [(ngModel)]="signUpSegment">\n\n      <ion-segment-button value="cancel">\n\n        <button ion-button clear>\n\n          <ion-icon name="md-close-circle"></ion-icon>\n\n          <p>Cancel</p>\n\n        </button>\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="devices">\n\n        <button ion-button clear>\n\n          <ion-icon name="md-desktop"></ion-icon>\n\n          <p>Devices</p>\n\n        </button>\n\n      </ion-segment-button>\n\n\n\n      <ion-segment-button value="price">\n\n        <button ion-button clear>\n\n          <ion-icon name="md-pricetags"></ion-icon>\n\n          <p>Price</p>\n\n        </button>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="signUpSegment">\n\n    <div class="netflixSegment cancelSegment" *ngSwitchCase="\'cancel\'">\n\n      <ion-col text-center>\n\n        <p class="segment-title">If you decide Netflix isn\'t for you - no</p>\n\n        <p class="segment-title">problem. No commitment. Cancel online</p>\n\n        <p class="segment-title">at any time.</p>\n\n\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n\n      </ion-col>\n\n    </div>\n\n\n\n    <div class="netflixSegment devicesSegment" *ngSwitchCase="\'devices\'">\n\n      <ion-col text-center>\n\n        <p class="segment-title">Watch TV shows and movies at</p>\n\n        <p class="segment-title">any time, anywhere -</p>\n\n        <p class="segment-title">personalised for you.</p>\n\n\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n\n      </ion-col>\n\n\n\n      <img src="assets/imgs/devices-netflix.png">\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="devices-segment-title">Watch on your TV</p>\n\n\n\n          <p class="devices-segment-subtitle">Smart Tvs, Playstation, Xbox, Chromecast,</p>\n\n          <p class="devices-segment-subtitle">Apple TV, Blu-ray players and more.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="devices-segment-title">Watch instantly or download for later</p>\n\n\n\n          <p class="devices-segment-subtitle">Available on phone and tablet,</p>\n\n          <p class="devices-segment-subtitle">wherever you go.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="devices-segment-title">Use any computer</p>\n\n\n\n          <p class="devices-segment-subtitle">Watch instantly in your browser.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n\n\n    <div class="netflixSegment priceSegment" *ngSwitchCase="\'price\'">\n\n      <ion-col text-center>\n\n        <p class="segment-title">Choose one plan and watch</p>\n\n        <p class="segment-title">everything on Netflix.</p>\n\n\n\n        <button color="netflixRed" ion-button round block>JOIN FREE FOR A MONTH</button>\n\n      </ion-col>\n\n\n\n      <ion-row style="margin-top: 40px;">\n\n        <ion-col text-center col-4>\n\n          <p class="table-column">BASIC</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-column">STANDARD</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-column">PREMIUM</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Monthly price after free month ends on 27/3/18</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">$9.99</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">$13.99</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">$17.99</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">HD available</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Ultra HD available</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-close" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Screens you can watch on at the same time</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">1</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">2</p>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <p class="table-value">4</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Watch on your laptop, TV, phone & tablet</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Unlimited movies and TV shows</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">Cancel at any time</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center>\n\n          <p class="table-value">First month free</p>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n\n\n        <ion-col text-center col-4>\n\n          <ion-icon name="md-checkmark" class="table-value"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n\n\n  <p class="questions">Questions? Phone +234 706 8833 966</p>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Help Centre</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Terms of Use</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Privacy</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Cookie Preferences</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <p class="footer-text">Netflix Australia</p>\n\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\sign-up\sign-up.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__downloads_downloads__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__["a" /* ComingSoonPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__downloads_downloads__["a" /* DownloadsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\tabs\tabs.html"*/'<ion-tabs color="netflixWhite">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Buscar" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Proximamente" tabIcon="md-laptop"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Descargas" tabIcon="md-download"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Mi Perfil" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HomeScreenService__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Helper__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_HomeScreenGroupItem__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, streamingMedia, loadingCtrl, homeScreenService, platform, alertController) {
        this.navCtrl = navCtrl;
        this.streamingMedia = streamingMedia;
        this.loadingCtrl = loadingCtrl;
        this.homeScreenService = homeScreenService;
        this.platform = platform;
        this.alertController = alertController;
        this.homeScreenGroups = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad HomePage");
        this.getHomeScreenGroups();
    };
    HomePage.prototype.getHomeScreenGroups = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Loading Home..."
        });
        loading.present();
        this.homeScreenService.getHomeScreenGroups().then(function (result) {
            _this.homeScreenGroups = result.homeScreenGroups;
            _this.homeScreenGroups.forEach(function (homeScreenGroup) {
                // Get home screen movies first
                _this.homeScreenService
                    .getHomeScreenGroupMovies(homeScreenGroup)
                    .then(function (result) {
                    result.homeScreenGroupMovies.forEach(function (movie) {
                        var movieGroupItem = new __WEBPACK_IMPORTED_MODULE_5__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                        movieGroupItem.itemId = movie.movieId;
                        movieGroupItem.picture = movie.picture;
                        movieGroupItem.isMovie = true;
                        homeScreenGroup.groupItems.push(movieGroupItem);
                    });
                    // Then get home screen tv shows
                    _this.homeScreenService
                        .getHomeScreenGroupTvShows(homeScreenGroup)
                        .then(function (result) {
                        result.homeScreenGroupTvShows.forEach(function (tvShow) {
                            var movieGroupItem = new __WEBPACK_IMPORTED_MODULE_5__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                            movieGroupItem.itemId = tvShow.tvShowId;
                            movieGroupItem.picture = tvShow.picture;
                            movieGroupItem.isMovie = false;
                            homeScreenGroup.groupItems.push(movieGroupItem);
                        });
                        // Finally, shuffle them
                        homeScreenGroup.groupItems = __WEBPACK_IMPORTED_MODULE_4__data_Helper__["a" /* Helper */].shuffle(homeScreenGroup.groupItems);
                    });
                });
            });
            loading.dismiss();
        });
    };
    HomePage.prototype.goToGroupItemDetails = function (groupItem) {
        if (groupItem.isMovie) {
            this.navCtrl.push("MovieDetailsPage", { movieId: groupItem.itemId });
        }
        else {
            this.navCtrl.push("ShowDetailsPage", { tvShowId: groupItem.itemId });
        }
    };
    HomePage.prototype.playVideoTrailer = function () {
        if (!this.platform.is("cordova")) {
            var alert_1 = this.alertController.create({
                title: "Run on device",
                subTitle: "This feature is only available on a device!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo("https://firebasestorage.googleapis.com/v0/b/ionnetflix-72e25.appspot.com/o/Watch%20the%20Black%20Lightning%20Trailer.mp4?alt=media&token=3331cd39-f38b-4add-8d83-cec4c213b571", options);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar align-title="center" transparent>\n    <ion-title>\n      <img src="assets/logowhite.png">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding #pageContent>\n  <div class="image">\n   \n  </div>\n\n  <div class="scroll-container">\n    <ion-row text-center>\n      <ion-col>\n        <p>New episode coming March 6th</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'md-add\'></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button icon-start color="netflixWhite" (click)="playVideoTrailer()">\n          <ion-icon name=\'ios-play\'></ion-icon>\n          PLAY\n        </button>\n      </ion-col>\n\n      <ion-col class="series-button" col-4 text-center>\n        <button ion-button clear color="netflixWhite">\n          <ion-icon name=\'ios-information-circle-outline\'></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-list>\n      <div *ngFor="let homeScreenGroup of homeScreenGroups">\n        <div class="item-title">{{homeScreenGroup.name}}</div>\n\n        <ion-scroll scrollX="true" scroll-avatar>\n          <ion-list>\n            <ion-col *ngFor="let groupItem of homeScreenGroup.groupItems" class="scroll-item">\n              <img src="{{ groupItem.picture }}" (click)="goToGroupItemDetails(groupItem)" />\n            </ion-col>\n          </ion-list>\n        </ion-scroll>\n      </div>\n    </ion-list>\n\n    <br>\n    <br>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_HomeScreenService__["a" /* HomeScreenService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenService = (function () {
    function HomeScreenService() {
    }
    HomeScreenService.prototype.getHomeScreenGroups = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                var homeScreenGroups = [];
                homeScreenGroupsSnapshot.forEach(function (doc) {
                    var group = new __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                    group.groupId = doc.id;
                    group.name = doc.data().name;
                    homeScreenGroups.push(group);
                });
                resolve({ homeScreenGroups: homeScreenGroups });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupMovies = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .get()
                .then(function (homeScreenGroupsMoviesSnapshot) {
                var homeScreenGroupMovies = [];
                homeScreenGroupsMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_3__data_Movie__["a" /* Movie */]();
                    movie.homeScreenGroupMovieId = doc.id;
                    movie.movieId = doc.data().movieId;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.releaseYear = doc.data().releaseYear;
                    movie.rating = doc.data().rating;
                    movie.description = doc.data().description;
                    movie.videoUrl = doc.data().videoUrl;
                    homeScreenGroupMovies.push(movie);
                });
                resolve({ homeScreenGroupMovies: homeScreenGroupMovies });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupTvShows = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .get()
                .then(function (homeScreenGroupTvShowsSnapshot) {
                var homeScreenGroupTvShows = [];
                homeScreenGroupTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_4__data_TvShow__["a" /* TvShow */]();
                    tvShow.homeScreenGroupTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    homeScreenGroupTvShows.push(tvShow);
                });
                resolve({ homeScreenGroupTvShows: homeScreenGroupTvShows });
            });
        });
        return promise;
    };
    HomeScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HomeScreenService);
    return HomeScreenService;
}());

//# sourceMappingURL=HomeScreenService.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var Helper = (function () {
    function Helper() {
    }
    Helper.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    return Helper;
}());

//# sourceMappingURL=Helper.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in_module__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_twitter_connect__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_AuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_ComingSoonService__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_HomeScreenService__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_MoviesService__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_TvShowsService__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_CategoriesService__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_UserService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_DownloadService__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDGl-9YivuUbUOVAkysBAtH1PerWKXC22E",
    authDomain: "como-peras-y-manzanas.firebaseapp.com",
    databaseURL: "https://como-peras-y-manzanas.firebaseio.com",
    projectId: "como-peras-y-manzanas",
    storageBucket: "como-peras-y-manzanas.appspot.com",
    messagingSenderId: "227789689145",
    appId: "1:227789689145:web:da1a1305ccc6d82b5798e8",
    measurementId: "G-8LRQT67L2W"
};
__WEBPACK_IMPORTED_MODULE_23_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grid-list/grid-list.module#GridListPageModule', name: 'GridListPage', segment: 'grid-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horizontal-list/horizontal-list.module#HorizontalListPageModule', name: 'HorizontalListPage', segment: 'horizontal-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylist/mylist.module#MylistPageModule', name: 'MylistPage', segment: 'mylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-details/show-details.module#ShowDetailsPageModule', name: 'ShowDetailsPage', segment: 'show-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-playback/video-playback.module#VideoPlaybackPageModule', name: 'VideoPlaybackPage', segment: 'video-playback', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_25_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in_module__["SignInPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up_module__["SignUpPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_26__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__services_ComingSoonService__["a" /* ComingSoonService */],
                __WEBPACK_IMPORTED_MODULE_28__services_HomeScreenService__["a" /* HomeScreenService */],
                __WEBPACK_IMPORTED_MODULE_29__services_MoviesService__["a" /* MoviesService */],
                __WEBPACK_IMPORTED_MODULE_30__services_TvShowsService__["a" /* TvShowsService */],
                __WEBPACK_IMPORTED_MODULE_31__services_CategoriesService__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_32__services_UserService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_33__services_DownloadService__["a" /* DownloadService */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoon; });
var ComingSoon = (function () {
    function ComingSoon() {
    }
    return ComingSoon;
}());

//# sourceMappingURL=ComingSoon.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadItem; });
var DownloadItem = (function () {
    function DownloadItem() {
    }
    return DownloadItem;
}());

//# sourceMappingURL=DownloadItem.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    return Category;
}());

//# sourceMappingURL=Category.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(alertCtrl, afAuth, platform, fb, googlePlus, twitter) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.twitter = twitter;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
            else {
                _this.uid = null;
            }
        });
    }
    AuthService.prototype.signInWithFacebookPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.fb
                .login(["email"])
                .then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(facebookCredential)
                    .then(function (res) { }, function (err) {
                    console.error("Error: ", err);
                    throw err;
                });
            })
                .catch(function (error) {
                throw error;
            });
        }
        else {
            return this.signInWithFacebookWeb();
        }
    };
    AuthService.prototype.signInWithFacebookWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGooglePlugin = function () {
        if (this.platform.is("cordova")) {
            return this.googlePlus
                .login({
                webClientId: "227789689145-foopdrscui079pdit5nqe2f3ecjrbb82.apps.googleusercontent.com",
                offline: true
            })
                .then(function (res) {
                var googleCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(googleCredential)
                    .then(function (response) {
                    console.log("Firebase success: " + JSON.stringify(response));
                });
            }, function (err) {
                console.error("Error: ", err);
                throw err;
            });
        }
        else {
            return this.signInWithGoogleWeb();
        }
    };
    AuthService.prototype.signInWithGoogleWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithTwitterPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.twitter.login().then(function (result) {
                console.log("Successful login!");
                console.log(result);
            }, function (error) {
                console.error("Error logging in");
                console.error(error);
                throw error;
            });
        }
        else {
            return this.signInWithTwitterWeb();
        }
    };
    AuthService.prototype.signInWithTwitterWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].TwitterAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GithubAuthProvider())
            .then(function (res) { });
    };
    AuthService.prototype.registerUser = function (email, password, password2) {
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) { })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (res) { })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    AuthService.prototype.forgotPassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["app"]()
            .auth()
            .sendPasswordResetEmail(email)
            .then(function (s) {
            var alert = _this.alertCtrl.create({
                title: "Password Reset",
                subTitle: "Check your inbox to reset your password",
                buttons: ["Dismiss"]
            });
            alert.present();
        })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Season; });
var Season = (function () {
    function Season() {
    }
    return Season;
}());

//# sourceMappingURL=Season.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Episode; });
var Episode = (function () {
    function Episode() {
    }
    return Episode;
}());

//# sourceMappingURL=Episode.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItem; });
var SearchItem = (function () {
    function SearchItem() {
    }
    return SearchItem;
}());

//# sourceMappingURL=SearchItem.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UserService__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, userService, downloadService, zone) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.userService = userService;
        this.downloadService = downloadService;
        this.zone = zone;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.downloadService.load();
        this.authService.afAuth.authState.subscribe(function (user) {
            console.log(user);
            if (user) {
                _this.userService.addUser(user);
                _this.zone.run(function () {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                });
            }
        }, function (error) {
            console.error(JSON.stringify(error));
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroup; });
var HomeScreenGroup = (function () {
    function HomeScreenGroup() {
        this.groupItems = [];
    }
    return HomeScreenGroup;
}());

//# sourceMappingURL=HomeScreenGroup.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroupItem; });
var HomeScreenGroupItem = (function () {
    function HomeScreenGroupItem() {
    }
    return HomeScreenGroupItem;
}());

//# sourceMappingURL=HomeScreenGroupItem.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShow; });
var TvShow = (function () {
    function TvShow() {
    }
    return TvShow;
}());

//# sourceMappingURL=TvShow.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=Movie.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInPage = (function () {
    function SignInPage(navCtrl, viewCtrl, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loginData = { email: "", password: "" };
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignInPage");
    };
    SignInPage.prototype.signIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging in..."
        });
        loading.present();
        this.authService
            .signIn(this.loginData.email, this.loginData.password)
            .then(function (x) {
            loading.dismiss();
        })
            .catch(function (error) {
            loading.dismiss();
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "Log In Error",
                subTitle: error.message,
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    SignInPage.prototype.signInWithFacebook = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging in with Facebook..."
        });
        loading.present();
        this.authService
            .signInWithFacebookPlugin()
            .then(function () {
            loading.dismiss();
        })
            .catch(function (error) {
            // Known Ionic View restriction
            if (error == "plugin_not_installed") {
                _this.showIonicViewErrorMessage().then(function () {
                    _this.authService
                        .signInWithFacebookWeb()
                        .then(function () {
                        loading.dismiss();
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleFacebookLoginError(error);
                    });
                });
            }
            else {
                loading.dismiss();
                _this.handleFacebookLoginError(error);
            }
        });
    };
    SignInPage.prototype.signInWithGoogle = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging in with Google..."
        });
        loading.present();
        this.authService
            .signInWithGooglePlugin()
            .then(function () {
            loading.dismiss();
        })
            .catch(function (error) {
            // Known Ionic View restriction
            if (error == "plugin_not_installed") {
                _this.showIonicViewErrorMessage().then(function () {
                    _this.authService
                        .signInWithGoogleWeb()
                        .then(function () {
                        loading.dismiss();
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleGoogleLoginError(error.message);
                    });
                });
            }
            else {
                loading.dismiss();
                _this.handleGoogleLoginError(error.message);
            }
        });
    };
    SignInPage.prototype.signInWithTwitter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging in with Twitter..."
        });
        loading.present();
        this.authService
            .signInWithTwitterPlugin()
            .then(function () {
            loading.dismiss();
        })
            .catch(function (error) {
            // Known Ionic View restriction
            if (error == "plugin_not_installed") {
                _this.showIonicViewErrorMessage().then(function () {
                    _this.authService
                        .signInWithTwitterWeb()
                        .then(function () {
                        loading.dismiss();
                    })
                        .catch(function (error) {
                        loading.dismiss();
                        _this.handleTwitterLoginError(error.message);
                    });
                });
            }
            else {
                loading.dismiss();
                _this.handleTwitterLoginError(error.message);
            }
        });
    };
    SignInPage.prototype.showIonicViewErrorMessage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: "Ionic View Login Error",
                subTitle: "Ionic View does not currently support this login plugin. Logging in using web...",
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            alert.dismiss().then(function () {
                                resolve();
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    SignInPage.prototype.handleFacebookLoginError = function (error) {
        var alert = this.alertCtrl.create({
            title: "Facebook Login Error",
            subTitle: error,
            buttons: ["Dismiss"]
        });
        alert.present();
    };
    SignInPage.prototype.handleGoogleLoginError = function (error) {
        var alert = this.alertCtrl.create({
            title: "Google Login Error",
            subTitle: error,
            buttons: ["Dismiss"]
        });
        alert.present();
    };
    SignInPage.prototype.handleTwitterLoginError = function (error) {
        var alert = this.alertCtrl.create({
            title: "Twitter Login Error",
            subTitle: error,
            buttons: ["Dismiss"]
        });
        alert.present();
    };
    SignInPage.prototype.goToSignUp = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push("SignUpPage");
        }
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sign-in",template:/*ion-inline-start:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\sign-in\sign-in.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/imgs/netflix-logo.png">\n    </ion-title>\n\n    <ion-buttons right>\n      <button class="help" ion-button clear></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll" text-center padding>\n  <ion-row>\n    <p class="sign-in-title">Sign in</p>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="loginData.password"></ion-input>\n    </ion-item>\n\n    <button color="netflixRed" ion-button round full (click)="signIn()">SIGN IN</button>\n  </ion-row>\n\n  <ion-row>\n    <ion-col text-center>\n      <button class="social-button" ion-button round color="facebook" (click)="signInWithFacebook()">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </ion-col>\n\n    <ion-col text-center>\n      <button class="social-button" ion-button round color="googlePlus" (click)="signInWithGoogle()">\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-col>\n\n    <ion-col text-center>\n      <button class="social-button" ion-button round color="twitter" (click)="signInWithTwitter()">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="height: 20%; margin-top: 15%;">\n    <ion-col>\n      <p (click)="goToSignUp()">New to Netflix?\n        <strong>Sign up now.</strong>\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"D:\Archivos de Marin\Chamba\ionNetflixFrontend\src\pages\sign-in\sign-in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadService = (function () {
    function DownloadService(transfer, file, platform, storage) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.moviesDownloaded = [];
        this.episodesDownloaded = [];
        this.storageDirectory = "";
        this.movieFileTransfer = this.transfer.create();
        this.episodeFileTransfer = this.transfer.create();
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is("cordova")) {
                return false;
            }
            if (_this.platform.is("ios")) {
                _this.storageDirectory = file.documentsDirectory;
            }
            else if (_this.platform.is("android")) {
                _this.storageDirectory = file.externalRootDirectory + "ionNetflix/";
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    DownloadService.prototype.load = function () {
        // this.storage.clear();
        var _this = this;
        // get all movies and tv shows episodes already stored on device
        this.storage.get("movies").then(function (val) {
            if (val !== null) {
                _this.moviesDownloaded = val;
            }
        });
        this.storage.get("episodes").then(function (val) {
            if (val !== null) {
                _this.episodesDownloaded = val;
                console.log(JSON.stringify(_this.episodesDownloaded));
            }
        });
    };
    DownloadService.prototype.downloadMovie = function (movie) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.movieFileTransfer
                .download(movie.videoUrl, _this.file.dataDirectory + movie.name + ".mp4")
                .then(function (entry) {
                console.log("download complete: " + JSON.stringify(entry.toURL()));
                _this.moviesDownloaded.push({
                    movieId: movie.movieId,
                    name: movie.name,
                    picture: movie.picture,
                    detailsPicture: movie.detailsPicture,
                    downloadUrl: entry.toURL()
                });
                _this.storage.set("movies", _this.moviesDownloaded);
                resolve({ downloadUrl: entry.toURL() });
            }, function (error) {
                console.error(JSON.stringify(error));
                reject(error);
            });
        });
        return promise;
    };
    DownloadService.prototype.downloadEpisode = function (episode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.episodeFileTransfer
                .download(episode.videoUrl, _this.file.dataDirectory + episode.name + ".mp4")
                .then(function (entry) {
                console.log("download complete: " + JSON.stringify(entry.toURL()));
                _this.episodesDownloaded.push({
                    episodeId: episode.episodeId,
                    name: episode.name,
                    picture: episode.picture,
                    downloadUrl: entry.toURL()
                });
                _this.storage.set("episodes", _this.episodesDownloaded);
                resolve({ downloadUrl: entry.toURL() });
            }, function (error) {
                console.error(JSON.stringify(error));
                reject(error);
            });
        });
        return promise;
    };
    DownloadService.prototype.isMovieDownloaded = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.moviesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                    var movie = _this.moviesDownloaded[i];
                    if (movie.movieId == movieId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.isEpisodeDownloaded = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.episodesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                    var episode = _this.episodesDownloaded[i];
                    if (episode.episodeId == episodeId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.deleteMovie = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                var movie = _this.moviesDownloaded[i];
                if (movie.movieId == movieId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.moviesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("movies", _this.moviesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService.prototype.deleteEpisode = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                var movie = _this.episodesDownloaded[i];
                if (movie.episodeId == episodeId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.episodesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("episodes", _this.episodesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DownloadService);
    return DownloadService;
}());

//# sourceMappingURL=DownloadService.js.map

/***/ })

},[382]);
//# sourceMappingURL=main.js.map