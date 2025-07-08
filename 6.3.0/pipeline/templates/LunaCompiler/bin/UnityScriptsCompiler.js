/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Bottle start.*/
    Bridge.define("Bottle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bottleColor: null,
            offset: null,
            originalPosition: null,
            isDragging: false,
            cam: null,
            dragZ: 0,
            originalCase: null
        },
        props: {
            BottleColor: {
                get: function () {
                    return this.bottleColor.$clone();
                }
            }
        },
        ctors: {
            init: function () {
                this.bottleColor = new UnityEngine.Color();
                this.offset = new UnityEngine.Vector3();
                this.originalPosition = new UnityEngine.Vector3();
                this.isDragging = false;
            }
        },
        methods: {
            /*Bottle.Start start.*/
            Start: function () {
                this.cam = UnityEngine.Camera.main;
                this.originalCase = this.GetComponentInParent(Case);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.originalCase, null)) {
                    this.originalCase.SetCurrentBottle(this);
                }
            },
            /*Bottle.Start end.*/

            /*Bottle.OnMouseDown start.*/
            OnMouseDown: function () {
                this.originalPosition = this.transform.position.$clone();
                this.offset = this.transform.position.$clone().sub( this.GetMouseWorldPos() );
                this.isDragging = true;
                this.dragZ = this.transform.position.z - 0.5;
                this.originalCase = this.transform.GetComponentInParent(Case);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.originalCase, null)) {
                    this.originalCase.ClearBottle();
                }
                this.transform.SetParent(null);
            },
            /*Bottle.OnMouseDown end.*/

            /*Bottle.OnMouseDrag start.*/
            OnMouseDrag: function () {
                if (this.isDragging) {
                    var dragPosition = this.GetMouseWorldPos().add( this.offset );
                    dragPosition.z = this.dragZ;
                    this.transform.position = dragPosition.$clone();
                }
            },
            /*Bottle.OnMouseDrag end.*/

            /*Bottle.OnMouseUp start.*/
            OnMouseUp: function () {
                this.isDragging = false;
                var targetCase = this.FindClosestValidCase();
                if (UnityEngine.MonoBehaviour.op_Inequality(targetCase, null) && targetCase.IsEmpty()) {
                    var snapPos = targetCase.GetSnapPosition();
                    this.transform.position = snapPos.$clone();
                    var snapPoint2 = targetCase.transform.Find("SnapPoint");
                    if (UnityEngine.Component.op_Inequality(snapPoint2, null)) {
                        this.transform.SetParent(snapPoint2);
                    } else {
                        this.transform.SetParent(targetCase.transform);
                    }
                    targetCase.SetCurrentBottle(this);
                    PuzzleManager.Instance.CheckAndClearLine(targetCase.lineIndex);
                    return;
                }
                this.transform.position = this.originalPosition.$clone();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.originalCase, null) && this.originalCase.IsEmpty()) {
                    var snapPoint = this.originalCase.transform.Find("SnapPoint");
                    if (UnityEngine.Component.op_Inequality(snapPoint, null)) {
                        this.transform.SetParent(snapPoint);
                    } else {
                        this.transform.SetParent(this.originalCase.transform);
                    }
                    this.originalCase.SetCurrentBottle(this);
                } else {
                    this.transform.SetParent(null);
                }
            },
            /*Bottle.OnMouseUp end.*/

            /*Bottle.GetMouseWorldPos start.*/
            GetMouseWorldPos: function () {
                var mousePos = UnityEngine.Input.mousePosition.$clone();
                mousePos.z = this.cam.WorldToScreenPoint(this.transform.position).z;
                return this.cam.ScreenToWorldPoint(mousePos);
            },
            /*Bottle.GetMouseWorldPos end.*/

            /*Bottle.FindClosestValidCase start.*/
            FindClosestValidCase: function () {
                var $t;
                var minDist = Number.POSITIVE_INFINITY;
                var bestCase = null;
                $t = Bridge.getEnumerator(PuzzleManager.Instance.AllCases);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(c, null)) && !(UnityEngine.GameObject.op_Equality(c.gameObject, null)) && c.IsEmpty()) {
                            var dist = pc.Vec3.distance( c.GetSnapPosition(), this.transform.position );
                            if (dist < 1.0 && dist < minDist) {
                                minDist = dist;
                                bestCase = c;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return bestCase;
            },
            /*Bottle.FindClosestValidCase end.*/


        }
    });
    /*Bottle end.*/

    /*ButtonPulse start.*/
    Bridge.define("ButtonPulse", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            scaleMultiplier: 0,
            duration: 0,
            originalScale: null,
            button: null
        },
        ctors: {
            init: function () {
                this.originalScale = new UnityEngine.Vector3();
                this.scaleMultiplier = 1.05;
                this.duration = 0.5;
            }
        },
        methods: {
            /*ButtonPulse.OnEnable start.*/
            OnEnable: function () {
                this.originalScale = this.transform.localScale.$clone();
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, this.originalScale.$clone().clone().scale( this.scaleMultiplier ), this.duration), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine);
                this.button = this.GetComponent(UnityEngine.UI.Button);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.button, null)) {
                    this.button.onClick.AddListener(Bridge.fn.cacheBind(this, this.OnClickCTA));
                }
            },
            /*ButtonPulse.OnEnable end.*/

            /*ButtonPulse.OnDisable start.*/
            OnDisable: function () {
                DG.Tweening.ShortcutExtensions.DOKill(this.transform);
                this.transform.localScale = this.originalScale.$clone();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.button, null)) {
                    this.button.onClick.RemoveListener(Bridge.fn.cacheBind(this, this.OnClickCTA));
                }
            },
            /*ButtonPulse.OnDisable end.*/

            /*ButtonPulse.OnClickCTA start.*/
            OnClickCTA: function () {
                UnityEngine.Analytics.Analytics.CustomEvent("Click on CTA", function (_o1) {
                        _o1.add("cta_id", Bridge.box(8, System.Int32));
                        return _o1;
                    }(new (System.Collections.Generic.Dictionary$2(System.String,System.Object)).ctor()));
            },
            /*ButtonPulse.OnClickCTA end.*/


        }
    });
    /*ButtonPulse end.*/

    /*Case start.*/
    Bridge.define("Case", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            lineIndex: 0,
            currentBottle: null,
            caseColor: null
        },
        props: {
            CaseColor: {
                get: function () {
                    return this.caseColor.$clone();
                }
            }
        },
        ctors: {
            init: function () {
                this.caseColor = new UnityEngine.Color();
            }
        },
        methods: {
            /*Case.Start start.*/
            Start: function () {
                var snapPoint = this.transform.Find("SnapPoint");
                var bottle = null;
                if (UnityEngine.Component.op_Inequality(snapPoint, null)) {
                    bottle = snapPoint.GetComponentInChildren(Bottle);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(bottle, null)) {
                    bottle = this.GetComponentInChildren(Bottle);
                }
                if (UnityEngine.MonoBehaviour.op_Inequality(bottle, null) && UnityEngine.MonoBehaviour.op_Equality(this.currentBottle, null)) {
                    this.currentBottle = bottle;
                    bottle.transform.SetParent((UnityEngine.Component.op_Inequality(snapPoint, null)) ? snapPoint : this.transform);
                }
            },
            /*Case.Start end.*/

            /*Case.IsEmpty start.*/
            IsEmpty: function () {
                return UnityEngine.MonoBehaviour.op_Equality(this.currentBottle, null);
            },
            /*Case.IsEmpty end.*/

            /*Case.SetCurrentBottle start.*/
            SetCurrentBottle: function (bottle) {
                this.currentBottle = bottle;
            },
            /*Case.SetCurrentBottle end.*/

            /*Case.ClearBottle start.*/
            ClearBottle: function () {
                this.currentBottle = null;
            },
            /*Case.ClearBottle end.*/

            /*Case.GetCurrentBottle start.*/
            GetCurrentBottle: function () {
                return this.currentBottle;
            },
            /*Case.GetCurrentBottle end.*/

            /*Case.GetSnapPosition start.*/
            GetSnapPosition: function () {
                var snapPoint = this.transform.Find("SnapPoint");
                if (UnityEngine.Component.op_Inequality(snapPoint, null)) {
                    return snapPoint.position.$clone();
                }
                return this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.5 ) );
            },
            /*Case.GetSnapPosition end.*/


        }
    });
    /*Case end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            itemPrefabs: null,
            gridParent: null,
            goodEffectPrefabs: null,
            uiCanvas: null,
            swapDuration: 0,
            destroyDuration: 0,
            refillDuration: 0,
            shuffleDuration: 0,
            isAnimating: false,
            board: null,
            firstSelected: null
        },
        ctors: {
            init: function () {
                this.swapDuration = 0.3;
                this.destroyDuration = 0.5;
                this.refillDuration = 0.4;
                this.shuffleDuration = 0.8;
                this.isAnimating = false;
                this.board = System.Array.create(null, null, UnityEngine.GameObject, 3, 3);
            }
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
                this.GenerateBoard();
            },
            /*GameManager.Start end.*/

            /*GameManager.GenerateBoard start.*/
            GenerateBoard: function () {
                for (var y = 0; y < 3; y = (y + 1) | 0) {
                    for (var x = 0; x < 3; x = (x + 1) | 0) {
                        var pos = new pc.Vec3( Bridge.Int.mul((((x - 1) | 0)), 3), Bridge.Int.mul((((y - 1) | 0)), 3), 15.0 );
                        var itemId = this.GetSafeItemId(x, y);
                        var go = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.itemPrefabs[itemId], pos, pc.Quat.IDENTITY.clone(), this.gridParent);
                        var cell = go.AddComponent(ItemCell);
                        cell.Init(x, y, itemId, this);
                        this.board.set([x, y], go);
                    }
                }
                this.StartCoroutine$1(this.CheckInitialBoard());
            },
            /*GameManager.GenerateBoard end.*/

            /*GameManager.CheckInitialBoard start.*/
            CheckInitialBoard: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (!this.HasPossibleMoves()) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShowShuffleMessage());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShuffleBoard());
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.CheckInitialBoard end.*/

            /*GameManager.GetSafeItemId start.*/
            GetSafeItemId: function (x, y) {
                var forbiddenIds = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                if (x >= 2 && this.GetItemIdSafe(((x - 1) | 0), y) === this.GetItemIdSafe(((x - 2) | 0), y)) {
                    forbiddenIds.add(this.GetItemIdSafe(((x - 1) | 0), y));
                }
                if (y >= 2 && this.GetItemIdSafe(x, ((y - 1) | 0)) === this.GetItemIdSafe(x, ((y - 2) | 0))) {
                    forbiddenIds.add(this.GetItemIdSafe(x, ((y - 1) | 0)));
                }
                var itemId;
                do {
                    itemId = UnityEngine.Random.Range(0, this.itemPrefabs.length);
                } while (forbiddenIds.contains(itemId));
                return itemId;
            },
            /*GameManager.GetSafeItemId end.*/

            /*GameManager.GetItemIdSafe start.*/
            GetItemIdSafe: function (x, y) {
                if (UnityEngine.GameObject.op_Equality(this.board.get([x, y]), null)) {
                    return -1;
                }
                var cell = this.board.get([x, y]).GetComponent(ItemCell);
                return (UnityEngine.MonoBehaviour.op_Inequality(cell, null)) ? cell.itemId : (-1);
            },
            /*GameManager.GetItemIdSafe end.*/

            /*GameManager.OnItemSelected start.*/
            OnItemSelected: function (selected) {
                if (!this.isAnimating) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.firstSelected, null)) {
                        this.firstSelected = selected;
                        this.firstSelected.Highlight(true);
                    } else if (this.IsAdjacent(this.firstSelected, selected)) {
                        this.firstSelected.Highlight(false);
                        this.StartCoroutine$1(this.TrySwap(this.firstSelected, selected));
                        this.firstSelected = null;
                    } else {
                        this.firstSelected.Highlight(false);
                        this.firstSelected = selected;
                        this.firstSelected.Highlight(true);
                    }
                }
            },
            /*GameManager.OnItemSelected end.*/

            /*GameManager.IsAdjacent start.*/
            IsAdjacent: function (a, b) {
                var dx = Math.abs(((a.x - b.x) | 0));
                var dy = Math.abs(((a.y - b.y) | 0));
                return ((dx + dy) | 0) === 1;
            },
            /*GameManager.IsAdjacent end.*/

            /*GameManager.TrySwap start.*/
            TrySwap: function (a, b) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isAnimating = true;
                                        $enumerator.current = this.StartCoroutine$1(this.SwapItemsAnimated(a, b));
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (this.CheckMatches()) {
                                            $step = 2;
                                            continue;
                                        } else  {
                                            $step = 9;
                                            continue;
                                        }
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.DestroyMatchedItems());
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = this.StartCoroutine$1(this.RefillBoardAnimated());
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    if (!this.HasPossibleMoves()) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShowShuffleMessage());
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShuffleBoard());
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    $step = 11;
                                    continue;
                                }
                                case 9: {
                                    $enumerator.current = this.StartCoroutine$1(this.SwapItemsAnimated(a, b));
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    this.isAnimating = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.TrySwap end.*/

            /*GameManager.SwapItemsAnimated start.*/
            SwapItemsAnimated: function (a, b) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPosA,
                    startPosB,
                    elapsed,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startPosA = a.transform.position.$clone();
                                        startPosB = b.transform.position.$clone();
                                        elapsed = 0.0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.swapDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t2 = elapsed / this.swapDuration;
                                        t2 = pc.math.smoothstep(0.0, 1.0, t2);
                                        a.transform.position = new pc.Vec3().lerp( startPosA, startPosB, t2 );
                                        b.transform.position = new pc.Vec3().lerp( startPosB, startPosA, t2 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    a.transform.position = startPosB.$clone();
                                        b.transform.position = startPosA.$clone();
                                        this.SwapBoardData(a, b);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.SwapItemsAnimated end.*/

            /*GameManager.SwapBoardData start.*/
            SwapBoardData: function (a, b) {
                this.board.set([a.x, a.y], b.gameObject);
                this.board.set([b.x, b.y], a.gameObject);
                var tempX = a.x;
                var tempY = a.y;
                a.SetPosition(b.x, b.y);
                b.SetPosition(tempX, tempY);
            },
            /*GameManager.SwapBoardData end.*/

            /*GameManager.CheckMatches start.*/
            CheckMatches: function () {
                var matchFound = false;
                for (var y = 0; y < 3; y = (y + 1) | 0) {
                    if (this.GetItemId(0, y) === this.GetItemId(1, y) && this.GetItemId(1, y) === this.GetItemId(2, y)) {
                        matchFound = true;
                        break;
                    }
                }
                if (!matchFound) {
                    for (var x = 0; x < 3; x = (x + 1) | 0) {
                        if (this.GetItemId(x, 0) === this.GetItemId(x, 1) && this.GetItemId(x, 1) === this.GetItemId(x, 2)) {
                            matchFound = true;
                            break;
                        }
                    }
                }
                return matchFound;
            },
            /*GameManager.CheckMatches end.*/

            /*GameManager.DestroyMatchedItems start.*/
            DestroyMatchedItems: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    toDestroy,
                    worldPos,
                    worldPos2,
                    elapsed,
                    originalScales,
                    t,
                    renderer,
                    color,
                    $t,
                    obj,
                    cell,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    toDestroy = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                                        for (var y = 0; y < 3; y = (y + 1) | 0) {
                                            if (this.GetItemId(0, y) === this.GetItemId(1, y) && this.GetItemId(1, y) === this.GetItemId(2, y)) {
                                                toDestroy.add(this.board.get([0, y]));
                                                toDestroy.add(this.board.get([1, y]));
                                                toDestroy.add(this.board.get([2, y]));
                                                worldPos = new pc.Vec3( 0.0, Bridge.Int.mul((((y - 1) | 0)), 3), 15.0 );
                                                this.StartCoroutine$1(this.ShowGoodEffect(worldPos.$clone()));
                                            }
                                        }
                                        for (var x = 0; x < 3; x = (x + 1) | 0) {
                                            if (this.GetItemId(x, 0) === this.GetItemId(x, 1) && this.GetItemId(x, 1) === this.GetItemId(x, 2)) {
                                                toDestroy.add(this.board.get([x, 0]));
                                                toDestroy.add(this.board.get([x, 1]));
                                                toDestroy.add(this.board.get([x, 2]));
                                                worldPos2 = new pc.Vec3( Bridge.Int.mul((((x - 1) | 0)), 3), 0.0, 15.0 );
                                                this.StartCoroutine$1(this.ShowGoodEffect(worldPos2.$clone()));
                                            }
                                        }
                                        elapsed = 0.0;
                                        originalScales = System.Array.init(toDestroy.Count, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        for (var j = 0; j < toDestroy.Count; j = (j + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(toDestroy.getItem(j), null)) {
                                                originalScales[j] = toDestroy.getItem(j).transform.localScale.$clone();
                                            }
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.destroyDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / this.destroyDuration;
                                        for (var i = 0; i < toDestroy.Count; i = (i + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(toDestroy.getItem(i), null)) {
                                                toDestroy.getItem(i).transform.localScale = new pc.Vec3().lerp( originalScales[i], pc.Vec3.ZERO.clone(), t );
                                                renderer = toDestroy.getItem(i).GetComponent(UnityEngine.Renderer);
                                                if (UnityEngine.Component.op_Inequality(renderer, null)) {
                                                    color = renderer.material.color.$clone();
                                                    color.a = pc.math.lerp(1.0, 0.0, t);
                                                    renderer.material.color = color.$clone();
                                                }
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $t = Bridge.getEnumerator(toDestroy);
                                        try {
                                            while ($t.moveNext()) {
                                                obj = $t.Current;
                                                if (UnityEngine.GameObject.op_Inequality(obj, null)) {
                                                    cell = obj.GetComponent(ItemCell);
                                                    this.board.set([cell.x, cell.y], null);
                                                    UnityEngine.Object.Destroy(obj);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.DestroyMatchedItems end.*/

            /*GameManager.ShowGoodEffect start.*/
            ShowGoodEffect: function (worldPosition) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    randomIndex,
                    selectedPrefab,
                    screenPos,
                    goodEffect,
                    rectTransform,
                    uiPos,
                    duration,
                    elapsed,
                    originalScale,
                    canvasGroup,
                    t,
                    scale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    randomIndex = UnityEngine.Random.Range(0, this.goodEffectPrefabs.length);
                                        selectedPrefab = this.goodEffectPrefabs[randomIndex];
                                        screenPos = UnityEngine.Camera.main.WorldToScreenPoint(worldPosition);
                                        goodEffect = UnityEngine.Object.Instantiate(UnityEngine.GameObject, selectedPrefab, this.uiCanvas.transform);
                                        rectTransform = goodEffect.GetComponent(UnityEngine.RectTransform);
                                        uiPos = { v : new UnityEngine.Vector2() };
                                        UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.uiCanvas.transform, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(screenPos), this.uiCanvas.worldCamera, uiPos);
                                        rectTransform.localPosition = UnityEngine.Vector3.FromVector2(uiPos.v.$clone());
                                        duration = 0.8;
                                        elapsed = 0.0;
                                        originalScale = rectTransform.localScale.$clone();
                                        canvasGroup = goodEffect.GetComponent(UnityEngine.CanvasGroup);
                                        if (UnityEngine.MonoBehaviour.op_Equality(canvasGroup, null)) {
                                            canvasGroup = goodEffect.AddComponent(UnityEngine.CanvasGroup);
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        scale = pc.math.lerp(1.2, 0.0, t);
                                        rectTransform.localScale = originalScale.$clone().clone().scale( scale );
                                        canvasGroup.alpha = pc.math.lerp(1.0, 0.0, t);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    UnityEngine.Object.Destroy(goodEffect);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.ShowGoodEffect end.*/

            /*GameManager.RefillBoardAnimated start.*/
            RefillBoardAnimated: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    newItems,
                    targetPos,
                    startPos,
                    itemId,
                    go,
                    cell,
                    elapsed,
                    startPositions,
                    targetPositions,
                    cell2,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    newItems = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                                        for (var y = 0; y < 3; y = (y + 1) | 0) {
                                            for (var x = 0; x < 3; x = (x + 1) | 0) {
                                                if (UnityEngine.GameObject.op_Equality(this.board.get([x, y]), null)) {
                                                    targetPos = new pc.Vec3( Bridge.Int.mul((((x - 1) | 0)), 3), Bridge.Int.mul((((y - 1) | 0)), 3), 15.0 );
                                                    startPos = new pc.Vec3( targetPos.x, targetPos.y + 9.0, targetPos.z );
                                                    itemId = this.GetSafeItemId(x, y);
                                                    go = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.itemPrefabs[itemId], startPos, pc.Quat.IDENTITY.clone(), this.gridParent);
                                                    cell = go.AddComponent(ItemCell);
                                                    cell.Init(x, y, itemId, this);
                                                    this.board.set([x, y], go);
                                                    newItems.add(go);
                                                }
                                            }
                                        }
                                        elapsed = 0.0;
                                        startPositions = System.Array.init(newItems.Count, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        targetPositions = System.Array.init(newItems.Count, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        for (var k = 0; k < newItems.Count; k = (k + 1) | 0) {
                                            startPositions[k] = newItems.getItem(k).transform.position.$clone();
                                            cell2 = newItems.getItem(k).GetComponent(ItemCell);
                                            targetPositions[k] = new pc.Vec3( Bridge.Int.mul((((cell2.x - 1) | 0)), 3), Bridge.Int.mul((((cell2.y - 1) | 0)), 3), 15.0 );
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < this.refillDuration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t2 = elapsed / this.refillDuration;
                                        t2 = pc.math.smoothstep(0.0, 1.0, t2);
                                        for (var i = 0; i < newItems.Count; i = (i + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(newItems.getItem(i), null)) {
                                                newItems.getItem(i).transform.position = new pc.Vec3().lerp( startPositions[i], targetPositions[i], t2 );
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    for (var j = 0; j < newItems.Count; j = (j + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(newItems.getItem(j), null)) {
                                                newItems.getItem(j).transform.position = targetPositions[j].$clone();
                                            }
                                        }
                                        if (this.CheckMatches()) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 5: {
                                    $enumerator.current = this.StartCoroutine$1(this.DestroyMatchedItems());
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    $enumerator.current = this.StartCoroutine$1(this.RefillBoardAnimated());
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    if (!this.HasPossibleMoves()) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShowShuffleMessage());
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $enumerator.current = this.StartCoroutine$1(this.ShuffleBoard());
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    $step = 12;
                                    continue;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.RefillBoardAnimated end.*/

            /*GameManager.HasPossibleMoves start.*/
            HasPossibleMoves: function () {
                for (var y = 0; y < 3; y = (y + 1) | 0) {
                    for (var x = 0; x < 3; x = (x + 1) | 0) {
                        if (x < 2 && this.WouldCreateMatch(x, y, ((x + 1) | 0), y)) {
                            return true;
                        }
                        if (y < 2 && this.WouldCreateMatch(x, y, x, ((y + 1) | 0))) {
                            return true;
                        }
                    }
                }
                return false;
            },
            /*GameManager.HasPossibleMoves end.*/

            /*GameManager.WouldCreateMatch start.*/
            WouldCreateMatch: function (x1, y1, x2, y2) {
                var item1 = this.GetItemId(x1, y1);
                var item2 = this.GetItemId(x2, y2);
                var tempBoard = System.Array.create(0, null, System.Int32, 3, 3);
                for (var y3 = 0; y3 < 3; y3 = (y3 + 1) | 0) {
                    for (var x3 = 0; x3 < 3; x3 = (x3 + 1) | 0) {
                        tempBoard.set([x3, y3], this.GetItemId(x3, y3));
                    }
                }
                tempBoard.set([x1, y1], item2);
                tempBoard.set([x2, y2], item1);
                for (var y4 = 0; y4 < 3; y4 = (y4 + 1) | 0) {
                    if (tempBoard.get([0, y4]) === tempBoard.get([1, y4]) && tempBoard.get([1, y4]) === tempBoard.get([2, y4])) {
                        return true;
                    }
                }
                for (var x4 = 0; x4 < 3; x4 = (x4 + 1) | 0) {
                    if (tempBoard.get([x4, 0]) === tempBoard.get([x4, 1]) && tempBoard.get([x4, 1]) === tempBoard.get([x4, 2])) {
                        return true;
                    }
                }
                return false;
            },
            /*GameManager.WouldCreateMatch end.*/

            /*GameManager.ShowShuffleMessage start.*/
            ShowShuffleMessage: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.ShowShuffleMessage end.*/

            /*GameManager.ShuffleBoard start.*/
            ShuffleBoard: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    itemIds,
                    items,
                    centerPos,
                    elapsed2,
                    startPositions,
                    t,
                    randomOffset,
                    shuffledBoard,
                    targetPositions,
                    itemIndex,
                    newItem,
                    newCell,
                    t2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    itemIds = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                                        items = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                                        for (var y2 = 0; y2 < 3; y2 = (y2 + 1) | 0) {
                                            for (var x = 0; x < 3; x = (x + 1) | 0) {
                                                if (UnityEngine.GameObject.op_Inequality(this.board.get([x, y2]), null)) {
                                                    itemIds.add(this.GetItemId(x, y2));
                                                    items.add(this.board.get([x, y2]));
                                                }
                                            }
                                        }
                                        centerPos = new pc.Vec3( 0.0, 0.0, 15.0 );
                                        elapsed2 = 0.0;
                                        startPositions = System.Array.init(items.Count, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        for (var l = 0; l < items.Count; l = (l + 1) | 0) {
                                            startPositions[l] = items.getItem(l).transform.position.$clone();
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed2 < this.shuffleDuration * 0.4 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t = elapsed2 / (this.shuffleDuration * 0.4);
                                        for (var i = 0; i < items.Count; i = (i + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(items.getItem(i), null)) {
                                                randomOffset = new pc.Vec3( UnityEngine.Random.Range$1(-0.5, 0.5), UnityEngine.Random.Range$1(-0.5, 0.5), 0.0 );
                                                items.getItem(i).transform.position = new pc.Vec3().lerp( startPositions[i], centerPos.$clone().add( randomOffset ), t );
                                                items.getItem(i).transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, UnityEngine.Random.Range(0, 360) * t );
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    shuffledBoard = this.GenerateShuffledBoard();
                                        elapsed2 = 0.0;
                                        targetPositions = System.Array.init(items.Count, function (){
                                            return new UnityEngine.Vector3();
                                        }, UnityEngine.Vector3);
                                        itemIndex = 0;
                                        for (var y = 0; y < 3; y = (y + 1) | 0) {
                                            for (var x2 = 0; x2 < 3; x2 = (x2 + 1) | 0) {
                                                if (itemIndex < items.Count) {
                                                    targetPositions[itemIndex] = new pc.Vec3( Bridge.Int.mul((((x2 - 1) | 0)), 3), Bridge.Int.mul((((y - 1) | 0)), 3), 15.0 );
                                                    UnityEngine.Object.Destroy(items.getItem(itemIndex));
                                                    newItem = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.itemPrefabs[shuffledBoard.get([x2, y])], centerPos, pc.Quat.IDENTITY.clone(), this.gridParent);
                                                    newCell = newItem.AddComponent(ItemCell);
                                                    newCell.Init(x2, y, shuffledBoard.get([x2, y]), this);
                                                    this.board.set([x2, y], newItem);
                                                    items.setItem(itemIndex, newItem);
                                                    itemIndex = (itemIndex + 1) | 0;
                                                }
                                            }
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if ( elapsed2 < this.shuffleDuration * 0.6 ) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 6: {
                                    elapsed2 += UnityEngine.Time.deltaTime;
                                        t2 = elapsed2 / (this.shuffleDuration * 0.6);
                                        for (var j = 0; j < items.Count; j = (j + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(items.getItem(j), null)) {
                                                items.getItem(j).transform.position = new pc.Vec3().lerp( centerPos, targetPositions[j], t2 );
                                                items.getItem(j).transform.rotation = new pc.Quat().lerpUnclamped( items.getItem(j).transform.rotation, pc.Quat.IDENTITY.clone(), pc.math.clamp( t2, 0, 1 ) );
                                            }
                                        }
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    
                                        $step = 5;
                                        continue;
                                }
                                case 8: {
                                    for (var k = 0; k < items.Count; k = (k + 1) | 0) {
                                            if (UnityEngine.GameObject.op_Inequality(items.getItem(k), null)) {
                                                items.getItem(k).transform.position = targetPositions[k].$clone();
                                                items.getItem(k).transform.rotation = pc.Quat.IDENTITY.clone();
                                            }
                                        }
                                        if (!this.HasPossibleMoves()) {
                                            $step = 9;
                                            continue;
                                        } 
                                        $step = 11;
                                        continue;
                                }
                                case 9: {
                                    $enumerator.current = this.StartCoroutine$1(this.CreateGuaranteedMoveBoard());
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.ShuffleBoard end.*/

            /*GameManager.GenerateShuffledBoard start.*/
            GenerateShuffledBoard: function () {
                var newBoard = System.Array.create(0, null, System.Int32, 3, 3);
                var maxAttempts = 100;
                for (var attempts = 0; attempts < maxAttempts; attempts = (attempts + 1) | 0) {
                    for (var y = 0; y < 3; y = (y + 1) | 0) {
                        for (var x = 0; x < 3; x = (x + 1) | 0) {
                            newBoard.set([x, y], this.GetSafeShuffleItemId(newBoard, x, y));
                        }
                    }
                    if (this.HasPossibleMovesOnBoard(newBoard)) {
                        return newBoard;
                    }
                }
                return this.GetGuaranteedMoveBoard();
            },
            /*GameManager.GenerateShuffledBoard end.*/

            /*GameManager.GetSafeShuffleItemId start.*/
            GetSafeShuffleItemId: function (tempBoard, x, y) {
                var forbiddenIds = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                if (x >= 2 && tempBoard.get([((x - 1) | 0), y]) === tempBoard.get([((x - 2) | 0), y])) {
                    forbiddenIds.add(tempBoard.get([((x - 1) | 0), y]));
                }
                if (y >= 2 && tempBoard.get([x, ((y - 1) | 0)]) === tempBoard.get([x, ((y - 2) | 0)])) {
                    forbiddenIds.add(tempBoard.get([x, ((y - 1) | 0)]));
                }
                var itemId;
                do {
                    itemId = UnityEngine.Random.Range(0, this.itemPrefabs.length);
                } while (forbiddenIds.contains(itemId));
                return itemId;
            },
            /*GameManager.GetSafeShuffleItemId end.*/

            /*GameManager.HasPossibleMovesOnBoard start.*/
            HasPossibleMovesOnBoard: function (testBoard) {
                for (var y = 0; y < 3; y = (y + 1) | 0) {
                    for (var x = 0; x < 3; x = (x + 1) | 0) {
                        if (x < 2 && this.WouldCreateMatchOnBoard(testBoard, x, y, ((x + 1) | 0), y)) {
                            return true;
                        }
                        if (y < 2 && this.WouldCreateMatchOnBoard(testBoard, x, y, x, ((y + 1) | 0))) {
                            return true;
                        }
                    }
                }
                return false;
            },
            /*GameManager.HasPossibleMovesOnBoard end.*/

            /*GameManager.WouldCreateMatchOnBoard start.*/
            WouldCreateMatchOnBoard: function (testBoard, x1, y1, x2, y2) {
                var $t;
                var item1 = testBoard.get([x1, y1]);
                var item2 = (($t = testBoard.get([x2, y2]), testBoard.set([x1, y1], $t), $t));
                testBoard.set([x2, y2], item1);
                var hasMatch = false;
                for (var y3 = 0; y3 < 3; y3 = (y3 + 1) | 0) {
                    if (testBoard.get([0, y3]) === testBoard.get([1, y3]) && testBoard.get([1, y3]) === testBoard.get([2, y3])) {
                        hasMatch = true;
                        break;
                    }
                }
                if (!hasMatch) {
                    for (var x3 = 0; x3 < 3; x3 = (x3 + 1) | 0) {
                        if (testBoard.get([x3, 0]) === testBoard.get([x3, 1]) && testBoard.get([x3, 1]) === testBoard.get([x3, 2])) {
                            hasMatch = true;
                            break;
                        }
                    }
                }
                testBoard.set([x1, y1], item1);
                testBoard.set([x2, y2], item2);
                return hasMatch;
            },
            /*GameManager.WouldCreateMatchOnBoard end.*/

            /*GameManager.GetGuaranteedMoveBoard start.*/
            GetGuaranteedMoveBoard: function () {
                var guaranteedBoard = System.Array.create(0, null, System.Int32, 3, 3);
                if (this.itemPrefabs.length >= 3) {
                    guaranteedBoard.set([0, 0], 0);
                    guaranteedBoard.set([1, 0], 1);
                    guaranteedBoard.set([2, 0], 2);
                    guaranteedBoard.set([0, 1], 1);
                    guaranteedBoard.set([1, 1], 2);
                    guaranteedBoard.set([2, 1], 0);
                    guaranteedBoard.set([0, 2], 2);
                    guaranteedBoard.set([1, 2], 0);
                    guaranteedBoard.set([2, 2], 1);
                } else {
                    for (var y = 0; y < 3; y = (y + 1) | 0) {
                        for (var x = 0; x < 3; x = (x + 1) | 0) {
                            guaranteedBoard.set([x, y], (((x + y) | 0)) % this.itemPrefabs.length);
                        }
                    }
                }
                return guaranteedBoard;
            },
            /*GameManager.GetGuaranteedMoveBoard end.*/

            /*GameManager.CreateGuaranteedMoveBoard start.*/
            CreateGuaranteedMoveBoard: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    guaranteedBoard,
                    pos,
                    go,
                    cell,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    guaranteedBoard = this.GetGuaranteedMoveBoard();
                                        for (var y = 0; y < 3; y = (y + 1) | 0) {
                                            for (var x = 0; x < 3; x = (x + 1) | 0) {
                                                if (UnityEngine.GameObject.op_Inequality(this.board.get([x, y]), null)) {
                                                    UnityEngine.Object.Destroy(this.board.get([x, y]));
                                                }
                                                pos = new pc.Vec3( Bridge.Int.mul((((x - 1) | 0)), 3), Bridge.Int.mul((((y - 1) | 0)), 3), 15.0 );
                                                go = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.itemPrefabs[guaranteedBoard.get([x, y])], pos, pc.Quat.IDENTITY.clone(), this.gridParent);
                                                cell = go.AddComponent(ItemCell);
                                                cell.Init(x, y, guaranteedBoard.get([x, y]), this);
                                                this.board.set([x, y], go);
                                            }
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.CreateGuaranteedMoveBoard end.*/

            /*GameManager.GetItemId start.*/
            GetItemId: function (x, y) {
                var cell = this.board.get([x, y]).GetComponent(ItemCell);
                return cell.itemId;
            },
            /*GameManager.GetItemId end.*/


        }
    });
    /*GameManager end.*/

    /*ItemCell start.*/
    Bridge.define("ItemCell", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            x: 0,
            y: 0,
            itemId: 0,
            manager: null,
            rend: null
        },
        methods: {
            /*ItemCell.Init start.*/
            Init: function (x, y, id, gm) {
                this.x = x;
                this.y = y;
                this.itemId = id;
                this.manager = gm;
                this.rend = this.GetComponent(UnityEngine.Renderer);
            },
            /*ItemCell.Init end.*/

            /*ItemCell.SetPosition start.*/
            SetPosition: function (newX, newY) {
                this.x = newX;
                this.y = newY;
            },
            /*ItemCell.SetPosition end.*/

            /*ItemCell.OnMouseDown start.*/
            OnMouseDown: function () {
                this.manager.OnItemSelected(this);
            },
            /*ItemCell.OnMouseDown end.*/

            /*ItemCell.Highlight start.*/
            Highlight: function (on) {
                if (UnityEngine.Component.op_Inequality(this.rend, null)) {
                    this.rend.material.color = (on ? new pc.Color( 1, 1, 0, 1 ) : new pc.Color( 1, 1, 1, 1 ));
                }
            },
            /*ItemCell.Highlight end.*/


        }
    });
    /*ItemCell end.*/

    /*PuzzleManager start.*/
    Bridge.define("PuzzleManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            AllCases: null,
            goodEffectPrefabs: null,
            uiCanvas: null
        },
        methods: {
            /*PuzzleManager.Awake start.*/
            Awake: function () {
                PuzzleManager.Instance = this;
                if (this.AllCases != null && this.AllCases.Count !== 0) {
                    this.TestInitialLines();
                }
            },
            /*PuzzleManager.Awake end.*/

            /*PuzzleManager.TestInitialLines start.*/
            TestInitialLines: function () {
                var $t, $t1;
                var lineIndices = new (System.Collections.Generic.HashSet$1(System.Int32)).ctor();
                $t = Bridge.getEnumerator(this.AllCases);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(c, null)) {
                            lineIndices.add(c.lineIndex);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(lineIndices);
                try {
                    while ($t1.moveNext()) {
                        var lineIndex = $t1.Current;
                        this.CheckAndClearLine(lineIndex);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
            },
            /*PuzzleManager.TestInitialLines end.*/

            /*PuzzleManager.CheckAndClearLine start.*/
            CheckAndClearLine: function (lineIndex) {
                if (this.AllCases != null && this.AllCases.Count !== 0) {
                    var lineCases = this.AllCases.FindAll(function (c) {
                        return UnityEngine.MonoBehaviour.op_Inequality(c, null) && c.lineIndex === lineIndex;
                    });
                    if (this.IsLineMatching(lineCases)) {
                        this.ClearLine(lineCases);
                    }
                }
            },
            /*PuzzleManager.CheckAndClearLine end.*/

            /*PuzzleManager.IsLineMatching start.*/
            IsLineMatching: function (line) {
                var $t;
                if (line == null || line.Count === 0) {
                    return false;
                }
                $t = Bridge.getEnumerator(line);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Equality(c, null)) {
                            return false;
                        }
                        if (c.IsEmpty()) {
                            return false;
                        }
                        var b = c.GetCurrentBottle();
                        if (UnityEngine.MonoBehaviour.op_Equality(b, null)) {
                            return false;
                        }
                        if (!this.IsColorMatch(b.BottleColor.$clone(), c.CaseColor.$clone())) {
                            return false;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return true;
            },
            /*PuzzleManager.IsLineMatching end.*/

            /*PuzzleManager.ClearLine start.*/
            ClearLine: function (line) {
                var $t;
                if (line == null || line.Count === 0) {
                    return;
                }
                var deletedLineIndex = line.getItem(0).lineIndex;
                $t = Bridge.getEnumerator(line);
                try {
                    while ($t.moveNext()) {
                        var c = $t.Current;
                        if (!(UnityEngine.MonoBehaviour.op_Equality(c, null))) {
                            var b = c.GetCurrentBottle();
                            if (UnityEngine.MonoBehaviour.op_Inequality(b, null)) {
                                UnityEngine.Object.Destroy(b.gameObject);
                            }
                            c.ClearBottle();
                            this.AllCases.remove(c);
                            UnityEngine.Object.Destroy(c.gameObject);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.DropLinesAbove(deletedLineIndex);
            },
            /*PuzzleManager.ClearLine end.*/

            /*PuzzleManager.IsColorMatch start.*/
            IsColorMatch: function (a, b, tolerance) {
                if (tolerance === void 0) { tolerance = 0.05; }
                return Math.abs(a.r - b.r) < tolerance && Math.abs(a.g - b.g) < tolerance && Math.abs(a.b - b.b) < tolerance && Math.abs(a.a - b.a) < tolerance;
            },
            /*PuzzleManager.IsColorMatch end.*/

            /*PuzzleManager.DropLinesAbove start.*/
            DropLinesAbove: function (deletedLineIndex) {
                var $t;
                var lineHeight = 1.65;
                var worldPos = new pc.Vec3( 0.0, 0.0, 15.0 );
                this.StartCoroutine$1(this.ShowGoodEffect(worldPos.$clone()));
                $t = Bridge.getEnumerator(this.AllCases);
                try {
                    while ($t.moveNext()) {
                        var c = { v : $t.Current };
                        if (!(UnityEngine.MonoBehaviour.op_Equality(c.v, null)) && c.v.lineIndex > deletedLineIndex) {
                            var oldIndex = { v : c.v.lineIndex };
                            c.v.lineIndex = (c.v.lineIndex - 1) | 0;
                            var newPos = c.v.transform.position.$clone().add( pc.Vec3.DOWN.clone().clone().scale( lineHeight ) );
                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveY(c.v.transform, newPos.y, 0.3), DG.Tweening.Ease.OutQuad), (function ($me, c, oldIndex) {
                                return function () {
                                    UnityEngine.Debug.Log$1(System.String.format("{0} \uc560\ub2c8\uba54\uc774\uc158 \uc644\ub8cc: {1} \u2192 {2}", c.v.name, Bridge.box(oldIndex.v, System.Int32), Bridge.box(c.v.lineIndex, System.Int32)));
                                };
                            })(this, c, oldIndex));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*PuzzleManager.DropLinesAbove end.*/

            /*PuzzleManager.ShowGoodEffect start.*/
            ShowGoodEffect: function (worldPosition) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    randomIndex,
                    selectedPrefab,
                    screenPos,
                    goodEffect,
                    rectTransform,
                    uiPos,
                    duration,
                    elapsed,
                    originalScale,
                    canvasGroup,
                    t,
                    scale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    randomIndex = UnityEngine.Random.Range(0, this.goodEffectPrefabs.length);
                                        selectedPrefab = this.goodEffectPrefabs[randomIndex];
                                        screenPos = UnityEngine.Camera.main.WorldToScreenPoint(worldPosition);
                                        goodEffect = UnityEngine.Object.Instantiate(UnityEngine.GameObject, selectedPrefab, this.uiCanvas.transform);
                                        rectTransform = goodEffect.GetComponent(UnityEngine.RectTransform);
                                        uiPos = { v : new UnityEngine.Vector2() };
                                        UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(Bridge.as(this.uiCanvas.transform, UnityEngine.RectTransform), UnityEngine.Vector2.FromVector3(screenPos), this.uiCanvas.worldCamera, uiPos);
                                        rectTransform.localPosition = UnityEngine.Vector3.FromVector2(uiPos.v.$clone());
                                        duration = 0.8;
                                        elapsed = 0.0;
                                        originalScale = rectTransform.localScale.$clone();
                                        canvasGroup = goodEffect.GetComponent(UnityEngine.CanvasGroup);
                                        if (UnityEngine.MonoBehaviour.op_Equality(canvasGroup, null)) {
                                            canvasGroup = goodEffect.AddComponent(UnityEngine.CanvasGroup);
                                        }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( elapsed < duration ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    elapsed += UnityEngine.Time.deltaTime;
                                        t = elapsed / duration;
                                        scale = pc.math.lerp(1.2, 0.0, t);
                                        rectTransform.localScale = originalScale.$clone().clone().scale( scale );
                                        canvasGroup.alpha = pc.math.lerp(1.0, 0.0, t);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    UnityEngine.Object.Destroy(goodEffect);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PuzzleManager.ShowGoodEffect end.*/


        }
    });
    /*PuzzleManager end.*/

    /*TextHint start.*/
    Bridge.define("TextHint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hintText: null,
            scaleAmount: 0,
            duration: 0
        },
        ctors: {
            init: function () {
                this.scaleAmount = 1.2;
                this.duration = 0.6;
            }
        },
        methods: {
            /*TextHint.Start start.*/
            Start: function () {
                this.AnimateLoop();
            },
            /*TextHint.Start end.*/

            /*TextHint.AnimateLoop start.*/
            AnimateLoop: function () {
                this.hintText.transform$1.localScale = new pc.Vec3( 1, 1, 1 );
                DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.hintText.transform$1, new pc.Vec3( 1, 1, 1 ).clone().scale( this.scaleAmount ), this.duration), -1, DG.Tweening.LoopType.Yoyo), DG.Tweening.Ease.InOutSine);
            },
            /*TextHint.AnimateLoop end.*/


        }
    });
    /*TextHint end.*/

    /*TimerSlider start.*/
    Bridge.define("TimerSlider", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timerSlider: null,
            totalTime: 0,
            resultPanel: null,
            timeLeft: 0,
            isFinished: false
        },
        ctors: {
            init: function () {
                this.totalTime = 10.0;
                this.isFinished = false;
            }
        },
        methods: {
            /*TimerSlider.Start start.*/
            Start: function () {
                this.timeLeft = this.totalTime;
                this.timerSlider.maxValue = this.totalTime;
                this.timerSlider.value = this.totalTime;
                if (UnityEngine.GameObject.op_Inequality(this.resultPanel, null)) {
                    this.resultPanel.SetActive(false);
                }
            },
            /*TimerSlider.Start end.*/

            /*TimerSlider.Update start.*/
            Update: function () {
                if (this.isFinished || !(this.timeLeft > 0.0)) {
                    return;
                }
                this.timeLeft -= UnityEngine.Time.deltaTime;
                this.timerSlider.value = this.timeLeft;
                if (this.timeLeft <= 0.0) {
                    this.timeLeft = 0.0;
                    this.isFinished = true;
                    if (UnityEngine.GameObject.op_Inequality(this.resultPanel, null)) {
                        this.resultPanel.SetActive(true);
                    }
                }
            },
            /*TimerSlider.Update end.*/


        }
    });
    /*TimerSlider end.*/

    /*UIScaler start.*/
    Bridge.define("UIScaler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            topImage: null,
            middleImage: null,
            bottomButton: null,
            tmpText: null,
            aspectThreshold: 0,
            topOriginalSize: null,
            middleOriginalSize: null,
            buttonOriginalSize: null,
            originalFontSize: 0,
            currentAspect: 0
        },
        ctors: {
            init: function () {
                this.topOriginalSize = new UnityEngine.Vector2();
                this.middleOriginalSize = new UnityEngine.Vector2();
                this.buttonOriginalSize = new UnityEngine.Vector2();
                this.aspectThreshold = 0.7;
                this.originalFontSize = 0.0;
                this.currentAspect = 0.0;
            }
        },
        methods: {
            /*UIScaler.Start start.*/
            Start: function () {
                this.topOriginalSize = this.topImage.sizeDelta.$clone();
                this.middleOriginalSize = this.middleImage.sizeDelta.$clone();
                this.buttonOriginalSize = this.bottomButton.sizeDelta.$clone();
                this.tmpText = this.bottomButton.GetComponentInChildren(TMPro.TextMeshProUGUI);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tmpText, null)) {
                    this.originalFontSize = this.tmpText.fontSize;
                }
                this.UpdateUIScale();
            },
            /*UIScaler.Start end.*/

            /*UIScaler.Update start.*/
            Update: function () {
                var newAspect = UnityEngine.Screen.width / UnityEngine.Screen.height;
                if (Math.abs(newAspect - this.currentAspect) > 0.01) {
                    this.UpdateUIScale();
                }
            },
            /*UIScaler.Update end.*/

            /*UIScaler.UpdateUIScale start.*/
            UpdateUIScale: function () {
                this.currentAspect = UnityEngine.Screen.width / UnityEngine.Screen.height;
                var scale = ((this.currentAspect > this.aspectThreshold) ? 0.5 : 1.0);
                this.topImage.sizeDelta = this.topOriginalSize.$clone().scale( scale );
                this.middleImage.sizeDelta = this.middleOriginalSize.$clone().scale( scale );
                this.bottomButton.sizeDelta = this.buttonOriginalSize.$clone().scale( scale );
                if (UnityEngine.MonoBehaviour.op_Inequality(this.tmpText, null)) {
                    this.tmpText.fontSize = this.originalFontSize * scale;
                }
            },
            /*UIScaler.UpdateUIScale end.*/


        }
    });
    /*UIScaler end.*/

    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem start.*/
    Bridge.define("UnityEngine.UI.Extensions.CasualGame.UIParticleSystem", {
        inherits: [UnityEngine.UI.MaskableGraphic],
        statics: {
            fields: {
                DefaultShaderPath: null,
                MainTex: 0
            },
            ctors: {
                init: function () {
                    this.DefaultShaderPath = "UI/Additive";
                    this.MainTex = UnityEngine.Shader.PropertyToID("_MainTex");
                }
            }
        },
        fields: {
            fixedTime: false,
            use3dRotation: false,
            _transform: null,
            _pSystem: null,
            _particles: null,
            _quad: null,
            _imageUV: null,
            _textureSheetAnimation: null,
            _textureSheetAnimationFrames: 0,
            _textureSheetAnimationFrameSize: null,
            _pRenderer: null,
            _isInitialised: false,
            _currentMaterial: null,
            _currentTexture: null,
            _mainModule: null
        },
        props: {
            mainTexture: {
                get: function () {
                    return this._currentTexture;
                }
            }
        },
        ctors: {
            init: function () {
                this._imageUV = new UnityEngine.Vector4();
                this._textureSheetAnimationFrameSize = new UnityEngine.Vector2();
                this.fixedTime = true;
                this._quad = System.Array.init(4, function (){
                    return new UnityEngine.UIVertex();
                }, UnityEngine.UIVertex);
                this._imageUV = pc.Vec4.ZERO.clone();
            }
        },
        methods: {
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Initialize start.*/
            Initialize: function () {
                if (UnityEngine.Component.op_Equality(this._transform, null)) {
                    this._transform = this.transform;
                }
                if (UnityEngine.Component.op_Equality(this._pSystem, null)) {
                    this._pSystem = this.GetComponent(UnityEngine.ParticleSystem);
                    if (UnityEngine.Component.op_Equality(this._pSystem, null)) {
                        return false;
                    }
                    this._mainModule = this._pSystem.main;
                    if (this._pSystem.main.maxParticles > 14000) {
                        this._mainModule.maxParticles = 14000;
                    }
                    this._pRenderer = this._pSystem.GetComponent(UnityEngine.ParticleSystemRenderer);
                    if (UnityEngine.Component.op_Inequality(this._pRenderer, null)) {
                        this._pRenderer.enabled = false;
                    }
                    if (this.material == null) {
                        var defaultShader = UnityEngine.Shader.Find("UI/Additive");
                        if (defaultShader != null) {
                            this.material = new UnityEngine.Material.$ctor2(defaultShader);
                        }
                    }
                    this._currentMaterial = this.material;
                    if (UnityEngine.Object.op_Implicit(this._currentMaterial) && this._currentMaterial.HasProperty(UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.MainTex)) {
                        this._currentTexture = this._currentMaterial.mainTexture;
                        if (this._currentTexture == null) {
                            this._currentTexture = UnityEngine.Texture2D.whiteTexture;
                        }
                    }
                    this.material = this._currentMaterial;
                    this._mainModule.scalingMode = UnityEngine.ParticleSystemScalingMode.Hierarchy;
                    this._particles = null;
                }
                if (this._particles == null) {
                    this._particles = System.Array.init(this._pSystem.main.maxParticles, function (){
                        return new UnityEngine.ParticleSystem.Particle();
                    }, UnityEngine.ParticleSystem.Particle);
                }
                this._imageUV = new pc.Vec4( 0.0, 0.0, 1.0, 1.0 );
                this._textureSheetAnimation = this._pSystem.textureSheetAnimation;
                this._textureSheetAnimationFrames = 0;
                this._textureSheetAnimationFrameSize = pc.Vec2.ZERO.clone();
                if (!this._textureSheetAnimation.enabled) {
                    return true;
                }
                this._textureSheetAnimationFrames = Bridge.Int.mul(this._textureSheetAnimation.numTilesX, this._textureSheetAnimation.numTilesY);
                this._textureSheetAnimationFrameSize = new pc.Vec2( 1.0 / this._textureSheetAnimation.numTilesX, 1.0 / this._textureSheetAnimation.numTilesY );
                return true;
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Initialize end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Awake start.*/
            Awake: function () {
                UnityEngine.UI.MaskableGraphic.prototype.Awake.call(this);
                if (!this.Initialize()) {
                    Bridge.ensureBaseProperty(this, "enabled").$UnityEngine$Component$enabled = false;
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Awake end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
                var $t, $t1;
                vh.Clear();
                if (!Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeInHierarchy) {
                    return;
                }
                if (!this._isInitialised && !this._pSystem.main.playOnAwake) {
                    this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    this._isInitialised = true;
                }
                var temp = pc.Vec2.ZERO.clone();
                var corner1 = pc.Vec2.ZERO.clone();
                var corner2 = pc.Vec2.ZERO.clone();
                var count = this._pSystem.GetParticles(this._particles);
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var particle = this._particles[i].$clone();
                    var position = UnityEngine.Vector2.FromVector3(((this._mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local) ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position)));
                    var rotation = (0.0 - particle.rotation) * (0.0174532924);
                    var rotation2 = rotation + 1.57079637;
                    var particleColor = particle.GetCurrentColor(this._pSystem);
                    var size = particle.GetCurrentSize(this._pSystem) * 0.5;
                    if (this._mainModule.scalingMode === UnityEngine.ParticleSystemScalingMode.Shape) {
                        position = position.$clone().scale( 1.0 / ( this.canvas.scaleFactor ) );
                    }
                    var particleUV = this._imageUV.$clone();
                    if (this._textureSheetAnimation.enabled) {
                        var frameProgress = 1.0 - particle.remainingLifetime / particle.startLifetime;
                        if (this._textureSheetAnimation.frameOverTime.curveMin != null) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.curveMin.value(1.0 - particle.remainingLifetime / particle.startLifetime);
                        } else if (this._textureSheetAnimation.frameOverTime.curveMax != null) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.curveMax.value(1.0 - particle.remainingLifetime / particle.startLifetime);
                        } else if (this._textureSheetAnimation.frameOverTime.constantMax > 0.0) {
                            frameProgress = this._textureSheetAnimation.frameOverTime.constantMax - particle.remainingLifetime / particle.startLifetime;
                        }
                        frameProgress = ($t = frameProgress * this._textureSheetAnimation.cycleCount, $t - Math.floor($t / 1.0) * 1.0);
                        var frame = 0;
                        switch (this._textureSheetAnimation.animation) {
                            case UnityEngine.ParticleSystemAnimationType.WholeSheet: 
                                frame = Math.floor(frameProgress * this._textureSheetAnimationFrames);
                                break;
                            case UnityEngine.ParticleSystemAnimationType.SingleRow: 
                                {
                                    frame = Math.floor(frameProgress * this._textureSheetAnimation.numTilesX);
                                    var row = this._textureSheetAnimation.rowIndex;
                                    frame = (frame + (Bridge.Int.mul(row, this._textureSheetAnimation.numTilesX))) | 0;
                                    break;
                                }
                        }
                        frame = frame % this._textureSheetAnimationFrames;
                        particleUV.x = (frame % this._textureSheetAnimation.numTilesX) * this._textureSheetAnimationFrameSize.x;
                        particleUV.y = 1.0 - Math.floor(frame / this._textureSheetAnimation.numTilesX) * this._textureSheetAnimationFrameSize.y;
                        particleUV.z = particleUV.x + this._textureSheetAnimationFrameSize.x;
                        particleUV.w = particleUV.y + this._textureSheetAnimationFrameSize.y;
                    }
                    temp.x = particleUV.x;
                    temp.y = particleUV.y;
                    this._quad[0] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[0].color = particleColor.$clone();
                    this._quad[0].uv0 = temp.$clone();
                    temp.x = particleUV.x;
                    temp.y = particleUV.w;
                    this._quad[1] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[1].color = particleColor.$clone();
                    this._quad[1].uv0 = temp.$clone();
                    temp.x = particleUV.z;
                    temp.y = particleUV.w;
                    this._quad[2] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[2].color = particleColor.$clone();
                    this._quad[2].uv0 = temp.$clone();
                    temp.x = particleUV.z;
                    temp.y = particleUV.y;
                    this._quad[3] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[3].color = particleColor.$clone();
                    this._quad[3].uv0 = temp.$clone();
                    if (rotation === 0.0) {
                        corner1.x = position.x - size;
                        corner1.y = position.y - size;
                        corner2.x = position.x + size;
                        corner2.y = position.y + size;
                        temp.x = corner1.x;
                        temp.y = corner1.y;
                        this._quad[0].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner1.x;
                        temp.y = corner2.y;
                        this._quad[1].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner2.y;
                        this._quad[2].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner1.y;
                        this._quad[3].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                    } else if (this.use3dRotation) {
                        var pos3d = ((this._mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local) ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position));
                        var verts = System.Array.init([new pc.Vec3( 0.0 - size, 0.0 - size, 0.0 ), new pc.Vec3( 0.0 - size, size, 0.0 ), new pc.Vec3( size, size, 0.0 ), new pc.Vec3( size, 0.0 - size, 0.0 )], UnityEngine.Vector3);
                        var particleRotation = ($t1 = particle.rotation3D, new pc.Quat().setFromEulerAngles_Unity( $t1.x, $t1.y, $t1.z ));
                        this._quad[0].position = pos3d.$clone().add( particleRotation.transformVector( verts[0] ) );
                        this._quad[1].position = pos3d.$clone().add( particleRotation.transformVector( verts[1] ) );
                        this._quad[2].position = pos3d.$clone().add( particleRotation.transformVector( verts[2] ) );
                        this._quad[3].position = pos3d.$clone().add( particleRotation.transformVector( verts[3] ) );
                    } else {
                        var right = new pc.Vec2( Math.cos(rotation), Math.sin(rotation) ).scale( size );
                        var up = new pc.Vec2( Math.cos(rotation2), Math.sin(rotation2) ).scale( size );
                        this._quad[0].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).sub( up ));
                        this._quad[1].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).add( up ));
                        this._quad[2].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).add( up ));
                        this._quad[3].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).sub( up ));
                    }
                    vh.AddUIVertexQuad(this._quad);
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnPopulateMesh end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Update start.*/
            Update: function () {
                if (!this.fixedTime && UnityEngine.Application.isPlaying) {
                    this._pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                    this.SetAllDirty();
                    if ((!(this._currentMaterial == null) && !(Bridge.referenceEquals(this._currentTexture, this._currentMaterial.mainTexture))) || (!(this.material == null) && !(this._currentMaterial == null) && !(Bridge.referenceEquals(this.material.shader, this._currentMaterial.shader)))) {
                        this._pSystem = null;
                        this.Initialize();
                    }
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.Update end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.LateUpdate start.*/
            LateUpdate: function () {
                if (!UnityEngine.Application.isPlaying) {
                    this.SetAllDirty();
                } else if (this.fixedTime) {
                    this._pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                    this.SetAllDirty();
                    if ((this._currentMaterial != null && !Bridge.referenceEquals(this._currentTexture, this._currentMaterial.mainTexture)) || (this.material != null && this._currentMaterial != null && !Bridge.referenceEquals(this.material.shader, this._currentMaterial.shader))) {
                        this._pSystem = null;
                        this.Initialize();
                    }
                }
                if (!(Bridge.referenceEquals(this.material, this._currentMaterial))) {
                    this._pSystem = null;
                    this.Initialize();
                }
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.LateUpdate end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnDestroy start.*/
            OnDestroy: function () {
                this._currentMaterial = null;
                this._currentTexture = null;
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.OnDestroy end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StartParticleEmission start.*/
            StartParticleEmission: function () {
                this._pSystem.Play();
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StartParticleEmission end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StopParticleEmission start.*/
            StopParticleEmission: function () {
                this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.StopParticleEmission end.*/

            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.PauseParticleEmission start.*/
            PauseParticleEmission: function () {
                this._pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
            },
            /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem.PauseParticleEmission end.*/


        }
    });
    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","UnityEngine.UI","System.Collections","System.Collections.Generic","TMPro","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*Bottle start.*/
    $m("Bottle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindClosestValidCase","t":8,"sn":"FindClosestValidCase","rt":Case},{"a":1,"n":"GetMouseWorldPos","t":8,"sn":"GetMouseWorldPos","rt":$n[0].Vector3},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[1].Void},{"a":1,"n":"OnMouseDrag","t":8,"sn":"OnMouseDrag","rt":$n[1].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"BottleColor","t":16,"rt":$n[0].Color,"g":{"a":2,"n":"get_BottleColor","t":8,"rt":$n[0].Color,"fg":"BottleColor"},"fn":"BottleColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bottleColor","t":4,"rt":$n[0].Color,"sn":"bottleColor"},{"a":1,"n":"cam","t":4,"rt":$n[0].Camera,"sn":"cam"},{"a":1,"n":"dragZ","t":4,"rt":$n[1].Single,"sn":"dragZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDragging","t":4,"rt":$n[1].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"offset","t":4,"rt":$n[0].Vector3,"sn":"offset"},{"a":1,"n":"originalCase","t":4,"rt":Case,"sn":"originalCase"},{"a":1,"n":"originalPosition","t":4,"rt":$n[0].Vector3,"sn":"originalPosition"}]}; }, $n);
    /*Bottle end.*/

    /*ButtonPulse start.*/
    $m("ButtonPulse", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnClickCTA","t":8,"sn":"OnClickCTA","rt":$n[1].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"button","t":4,"rt":$n[2].Button,"sn":"button"},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"originalScale","t":4,"rt":$n[0].Vector3,"sn":"originalScale"},{"a":2,"n":"scaleMultiplier","t":4,"rt":$n[1].Single,"sn":"scaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ButtonPulse end.*/

    /*Case start.*/
    $m("Case", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClearBottle","t":8,"sn":"ClearBottle","rt":$n[1].Void},{"a":2,"n":"GetCurrentBottle","t":8,"sn":"GetCurrentBottle","rt":Bottle},{"a":2,"n":"GetSnapPosition","t":8,"sn":"GetSnapPosition","rt":$n[0].Vector3},{"a":2,"n":"IsEmpty","t":8,"sn":"IsEmpty","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetCurrentBottle","t":8,"pi":[{"n":"bottle","pt":Bottle,"ps":0}],"sn":"SetCurrentBottle","rt":$n[1].Void,"p":[Bottle]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"CaseColor","t":16,"rt":$n[0].Color,"g":{"a":2,"n":"get_CaseColor","t":8,"rt":$n[0].Color,"fg":"CaseColor"},"fn":"CaseColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"caseColor","t":4,"rt":$n[0].Color,"sn":"caseColor"},{"a":1,"n":"currentBottle","t":4,"rt":Bottle,"sn":"currentBottle"},{"a":2,"n":"lineIndex","t":4,"rt":$n[1].Int32,"sn":"lineIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Case end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckInitialBoard","t":8,"sn":"CheckInitialBoard","rt":$n[3].IEnumerator},{"a":1,"n":"CheckMatches","t":8,"sn":"CheckMatches","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CreateGuaranteedMoveBoard","t":8,"sn":"CreateGuaranteedMoveBoard","rt":$n[3].IEnumerator},{"a":1,"n":"DestroyMatchedItems","t":8,"sn":"DestroyMatchedItems","rt":$n[3].IEnumerator},{"a":1,"n":"GenerateBoard","t":8,"sn":"GenerateBoard","rt":$n[1].Void},{"a":1,"n":"GenerateShuffledBoard","t":8,"sn":"GenerateShuffledBoard","rt":$n[1].Array.type(System.Int32, 2)},{"a":1,"n":"GetGuaranteedMoveBoard","t":8,"sn":"GetGuaranteedMoveBoard","rt":$n[1].Array.type(System.Int32, 2)},{"a":1,"n":"GetItemId","t":8,"pi":[{"n":"x","pt":$n[1].Int32,"ps":0},{"n":"y","pt":$n[1].Int32,"ps":1}],"sn":"GetItemId","rt":$n[1].Int32,"p":[$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetItemIdSafe","t":8,"pi":[{"n":"x","pt":$n[1].Int32,"ps":0},{"n":"y","pt":$n[1].Int32,"ps":1}],"sn":"GetItemIdSafe","rt":$n[1].Int32,"p":[$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetSafeItemId","t":8,"pi":[{"n":"x","pt":$n[1].Int32,"ps":0},{"n":"y","pt":$n[1].Int32,"ps":1}],"sn":"GetSafeItemId","rt":$n[1].Int32,"p":[$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetSafeShuffleItemId","t":8,"pi":[{"n":"tempBoard","pt":$n[1].Array.type(System.Int32, 2),"ps":0},{"n":"x","pt":$n[1].Int32,"ps":1},{"n":"y","pt":$n[1].Int32,"ps":2}],"sn":"GetSafeShuffleItemId","rt":$n[1].Int32,"p":[$n[1].Array.type(System.Int32, 2),$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"HasPossibleMoves","t":8,"sn":"HasPossibleMoves","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"HasPossibleMovesOnBoard","t":8,"pi":[{"n":"testBoard","pt":$n[1].Array.type(System.Int32, 2),"ps":0}],"sn":"HasPossibleMovesOnBoard","rt":$n[1].Boolean,"p":[$n[1].Array.type(System.Int32, 2)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsAdjacent","t":8,"pi":[{"n":"a","pt":ItemCell,"ps":0},{"n":"b","pt":ItemCell,"ps":1}],"sn":"IsAdjacent","rt":$n[1].Boolean,"p":[ItemCell,ItemCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"OnItemSelected","t":8,"pi":[{"n":"selected","pt":ItemCell,"ps":0}],"sn":"OnItemSelected","rt":$n[1].Void,"p":[ItemCell]},{"a":1,"n":"RefillBoardAnimated","t":8,"sn":"RefillBoardAnimated","rt":$n[3].IEnumerator},{"a":1,"n":"ShowGoodEffect","t":8,"pi":[{"n":"worldPosition","pt":$n[0].Vector3,"ps":0}],"sn":"ShowGoodEffect","rt":$n[3].IEnumerator,"p":[$n[0].Vector3]},{"a":1,"n":"ShowShuffleMessage","t":8,"sn":"ShowShuffleMessage","rt":$n[3].IEnumerator},{"a":1,"n":"ShuffleBoard","t":8,"sn":"ShuffleBoard","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"SwapBoardData","t":8,"pi":[{"n":"a","pt":ItemCell,"ps":0},{"n":"b","pt":ItemCell,"ps":1}],"sn":"SwapBoardData","rt":$n[1].Void,"p":[ItemCell,ItemCell]},{"a":1,"n":"SwapItemsAnimated","t":8,"pi":[{"n":"a","pt":ItemCell,"ps":0},{"n":"b","pt":ItemCell,"ps":1}],"sn":"SwapItemsAnimated","rt":$n[3].IEnumerator,"p":[ItemCell,ItemCell]},{"a":1,"n":"TrySwap","t":8,"pi":[{"n":"a","pt":ItemCell,"ps":0},{"n":"b","pt":ItemCell,"ps":1}],"sn":"TrySwap","rt":$n[3].IEnumerator,"p":[ItemCell,ItemCell]},{"a":1,"n":"WouldCreateMatch","t":8,"pi":[{"n":"x1","pt":$n[1].Int32,"ps":0},{"n":"y1","pt":$n[1].Int32,"ps":1},{"n":"x2","pt":$n[1].Int32,"ps":2},{"n":"y2","pt":$n[1].Int32,"ps":3}],"sn":"WouldCreateMatch","rt":$n[1].Boolean,"p":[$n[1].Int32,$n[1].Int32,$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"WouldCreateMatchOnBoard","t":8,"pi":[{"n":"testBoard","pt":$n[1].Array.type(System.Int32, 2),"ps":0},{"n":"x1","pt":$n[1].Int32,"ps":1},{"n":"y1","pt":$n[1].Int32,"ps":2},{"n":"x2","pt":$n[1].Int32,"ps":3},{"n":"y2","pt":$n[1].Int32,"ps":4}],"sn":"WouldCreateMatchOnBoard","rt":$n[1].Boolean,"p":[$n[1].Array.type(System.Int32, 2),$n[1].Int32,$n[1].Int32,$n[1].Int32,$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"board","t":4,"rt":System.Array.type(UnityEngine.GameObject, 2),"sn":"board"},{"a":2,"n":"destroyDuration","t":4,"rt":$n[1].Single,"sn":"destroyDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"firstSelected","t":4,"rt":ItemCell,"sn":"firstSelected"},{"a":2,"n":"goodEffectPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"goodEffectPrefabs"},{"a":2,"n":"gridParent","t":4,"rt":$n[0].Transform,"sn":"gridParent"},{"a":1,"n":"isAnimating","t":4,"rt":$n[1].Boolean,"sn":"isAnimating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"itemPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"itemPrefabs"},{"a":2,"n":"refillDuration","t":4,"rt":$n[1].Single,"sn":"refillDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"shuffleDuration","t":4,"rt":$n[1].Single,"sn":"shuffleDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"swapDuration","t":4,"rt":$n[1].Single,"sn":"swapDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"uiCanvas","t":4,"rt":$n[0].Canvas,"sn":"uiCanvas"}]}; }, $n);
    /*GameManager end.*/

    /*ItemCell start.*/
    $m("ItemCell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Highlight","t":8,"pi":[{"n":"on","pt":$n[1].Boolean,"ps":0}],"sn":"Highlight","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"Init","t":8,"pi":[{"n":"x","pt":$n[1].Int32,"ps":0},{"n":"y","pt":$n[1].Int32,"ps":1},{"n":"id","pt":$n[1].Int32,"ps":2},{"n":"gm","pt":GameManager,"ps":3}],"sn":"Init","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32,$n[1].Int32,GameManager]},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[1].Void},{"a":2,"n":"SetPosition","t":8,"pi":[{"n":"newX","pt":$n[1].Int32,"ps":0},{"n":"newY","pt":$n[1].Int32,"ps":1}],"sn":"SetPosition","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"itemId","t":4,"rt":$n[1].Int32,"sn":"itemId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"manager","t":4,"rt":GameManager,"sn":"manager"},{"a":1,"n":"rend","t":4,"rt":$n[0].Renderer,"sn":"rend"},{"a":2,"n":"x","t":4,"rt":$n[1].Int32,"sn":"x","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"y","t":4,"rt":$n[1].Int32,"sn":"y","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ItemCell end.*/

    /*PuzzleManager start.*/
    $m("PuzzleManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"CheckAndClearLine","t":8,"pi":[{"n":"lineIndex","pt":$n[1].Int32,"ps":0}],"sn":"CheckAndClearLine","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"ClearLine","t":8,"pi":[{"n":"line","pt":$n[4].List$1(Case),"ps":0}],"sn":"ClearLine","rt":$n[1].Void,"p":[$n[4].List$1(Case)]},{"a":1,"n":"DropLinesAbove","t":8,"pi":[{"n":"deletedLineIndex","pt":$n[1].Int32,"ps":0}],"sn":"DropLinesAbove","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":1,"n":"IsColorMatch","t":8,"pi":[{"n":"a","pt":$n[0].Color,"ps":0},{"n":"b","pt":$n[0].Color,"ps":1},{"n":"tolerance","dv":0.05,"o":true,"pt":$n[1].Single,"ps":2}],"sn":"IsColorMatch","rt":$n[1].Boolean,"p":[$n[0].Color,$n[0].Color,$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsLineMatching","t":8,"pi":[{"n":"line","pt":$n[4].List$1(Case),"ps":0}],"sn":"IsLineMatching","rt":$n[1].Boolean,"p":[$n[4].List$1(Case)],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ShowGoodEffect","t":8,"pi":[{"n":"worldPosition","pt":$n[0].Vector3,"ps":0}],"sn":"ShowGoodEffect","rt":$n[3].IEnumerator,"p":[$n[0].Vector3]},{"a":1,"n":"TestInitialLines","t":8,"sn":"TestInitialLines","rt":$n[1].Void},{"a":2,"n":"AllCases","t":4,"rt":$n[4].List$1(Case),"sn":"AllCases"},{"a":2,"n":"Instance","is":true,"t":4,"rt":PuzzleManager,"sn":"Instance"},{"a":2,"n":"goodEffectPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"goodEffectPrefabs"},{"a":2,"n":"uiCanvas","t":4,"rt":$n[0].Canvas,"sn":"uiCanvas"}]}; }, $n);
    /*PuzzleManager end.*/

    /*TextHint start.*/
    $m("TextHint", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateLoop","t":8,"sn":"AnimateLoop","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"duration","t":4,"rt":$n[1].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hintText","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"hintText"},{"a":2,"n":"scaleAmount","t":4,"rt":$n[1].Single,"sn":"scaleAmount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TextHint end.*/

    /*TimerSlider start.*/
    $m("TimerSlider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"isFinished","t":4,"rt":$n[1].Boolean,"sn":"isFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"resultPanel","t":4,"rt":$n[0].GameObject,"sn":"resultPanel"},{"a":1,"n":"timeLeft","t":4,"rt":$n[1].Single,"sn":"timeLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timerSlider","t":4,"rt":$n[2].Slider,"sn":"timerSlider"},{"a":2,"n":"totalTime","t":4,"rt":$n[1].Single,"sn":"totalTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*TimerSlider end.*/

    /*UIScaler start.*/
    $m("UIScaler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"UpdateUIScale","t":8,"sn":"UpdateUIScale","rt":$n[1].Void},{"a":2,"n":"aspectThreshold","t":4,"rt":$n[1].Single,"sn":"aspectThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bottomButton","t":4,"rt":$n[0].RectTransform,"sn":"bottomButton"},{"a":1,"n":"buttonOriginalSize","t":4,"rt":$n[0].Vector2,"sn":"buttonOriginalSize"},{"a":1,"n":"currentAspect","t":4,"rt":$n[1].Single,"sn":"currentAspect","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"middleImage","t":4,"rt":$n[0].RectTransform,"sn":"middleImage"},{"a":1,"n":"middleOriginalSize","t":4,"rt":$n[0].Vector2,"sn":"middleOriginalSize"},{"a":1,"n":"originalFontSize","t":4,"rt":$n[1].Single,"sn":"originalFontSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tmpText","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"tmpText"},{"a":2,"n":"topImage","t":4,"rt":$n[0].RectTransform,"sn":"topImage"},{"a":1,"n":"topOriginalSize","t":4,"rt":$n[0].Vector2,"sn":"topOriginalSize"}]}; }, $n);
    /*UIScaler end.*/

    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem start.*/
    $m("UnityEngine.UI.Extensions.CasualGame.UIParticleSystem", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute(),new UnityEngine.RequireComponent.$ctor1(UnityEngine.CanvasRenderer, UnityEngine.ParticleSystem),new UnityEngine.AddComponentMenu.ctor("UI/Effects/Extensions/UIParticleSystem")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"ov":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[1].Void},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[2].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[1].Void,"p":[$n[2].VertexHelper]},{"a":2,"n":"PauseParticleEmission","t":8,"sn":"PauseParticleEmission","rt":$n[1].Void},{"a":2,"n":"StartParticleEmission","t":8,"sn":"StartParticleEmission","rt":$n[1].Void},{"a":2,"n":"StopParticleEmission","t":8,"sn":"StopParticleEmission","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"ov":true,"a":2,"n":"mainTexture","t":16,"rt":$n[0].Texture,"g":{"ov":true,"a":2,"n":"get_mainTexture","t":8,"rt":$n[0].Texture,"fg":"mainTexture"},"fn":"mainTexture"},{"a":1,"n":"DefaultShaderPath","is":true,"t":4,"rt":$n[1].String,"sn":"DefaultShaderPath"},{"a":1,"n":"MainTex","is":true,"t":4,"rt":$n[1].Int32,"sn":"MainTex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_currentMaterial","t":4,"rt":$n[0].Material,"sn":"_currentMaterial"},{"a":1,"n":"_currentTexture","t":4,"rt":$n[0].Texture,"sn":"_currentTexture"},{"a":1,"n":"_imageUV","t":4,"rt":$n[0].Vector4,"sn":"_imageUV"},{"a":1,"n":"_isInitialised","t":4,"rt":$n[1].Boolean,"sn":"_isInitialised","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_mainModule","t":4,"rt":pc.ParticleSystemMain,"sn":"_mainModule"},{"a":1,"n":"_pRenderer","t":4,"rt":$n[0].ParticleSystemRenderer,"sn":"_pRenderer"},{"a":1,"n":"_pSystem","t":4,"rt":$n[0].ParticleSystem,"sn":"_pSystem"},{"a":1,"n":"_particles","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem.Particle),"sn":"_particles"},{"a":1,"n":"_quad","t":4,"rt":System.Array.type(UnityEngine.UIVertex),"sn":"_quad","ro":true},{"a":1,"n":"_textureSheetAnimation","t":4,"rt":pc.ParticleSystemTextureSheetAnimation,"sn":"_textureSheetAnimation"},{"a":1,"n":"_textureSheetAnimationFrameSize","t":4,"rt":$n[0].Vector2,"sn":"_textureSheetAnimationFrameSize"},{"a":1,"n":"_textureSheetAnimationFrames","t":4,"rt":$n[1].Int32,"sn":"_textureSheetAnimationFrames","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_transform","t":4,"rt":$n[0].Transform,"sn":"_transform"},{"at":[new UnityEngine.TooltipAttribute("Having this enabled run the system in LateUpdate rather than in Update making it faster but less precise (more clunky)")],"a":2,"n":"fixedTime","t":4,"rt":$n[1].Boolean,"sn":"fixedTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Enables 3d rotation for the particles")],"a":2,"n":"use3dRotation","t":4,"rt":$n[1].Boolean,"sn":"use3dRotation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UnityEngine.UI.Extensions.CasualGame.UIParticleSystem end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[1].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[1].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[1].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[1].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[1].Int32,"p":[$n[7].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"to","pt":$n[1].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[1].Int32,"p":[$n[7].AudioMixer,$n[1].Single,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOKill","rt":$n[1].Int32,"p":[$n[7].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPitch","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0},{"n":"floatName","pt":$n[1].String,"ps":1},{"n":"endValue","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[7].AudioMixer,$n[1].String,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[7].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[1].Int32,"p":[$n[7].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[9].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"towards","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[6].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[6].AxisConstraint,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[9].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[8].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[6].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[9].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[9].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[9].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[6].PathType,$n[6].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DORotate","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[0].SpriteRenderer,pc.ColorGradient,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[2].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[2].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[2].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"fromValue","pt":$n[1].Int32,"ps":1},{"n":"endValue","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[10].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[8].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[2].Text,$n[1].Int32,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[10].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].CanvasGroup,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$1","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Graphic,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$2","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$3","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Outline,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$4","rt":$n[8].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[2].Text,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[2].Image,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivot","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotX","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotY","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"punch","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Outline,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOScale","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[2].Outline,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","pt":$n[0].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[0].Vector2,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"center","pt":$n[0].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Single,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Text,"ps":0},{"n":"endValue","pt":$n[1].String,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[1].String,"ps":5}],"sn":"DOText","rt":$n[8].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[2].Text,$n[1].String,$n[1].Single,$n[1].Boolean,$n[6].ScrambleMode,$n[1].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].Slider,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOValue","rt":$n[8].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[2].Slider,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[2].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[2].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].RectTransform,"ps":0},{"n":"to","pt":$n[0].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[0].Vector2,"p":[$n[0].RectTransform,$n[0].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[1].String,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].String,$n[1].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOOffset","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOTiling","rt":$n[8].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[0].CustomYieldInstruction,"p":[$n[6].Tween,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[1].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[1].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[1].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[1].Boolean,"ps":1},{"n":"isLocal","pt":$n[1].Boolean,"ps":2},{"n":"path","pt":$n[9].Path,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[8].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].MonoBehaviour,$n[1].Boolean,$n[1].Boolean,$n[9].Path,$n[1].Single,$n[6].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[11].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[0].Quaternion,"ps":2},{"n":"trans","pt":$n[0].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[1].Void,"p":[$n[11].PathOptions,$n[6].Tween,$n[0].Quaternion,$n[0].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
