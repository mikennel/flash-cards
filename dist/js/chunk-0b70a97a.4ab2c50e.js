(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b70a97a"],{"0c70":function(e,t,s){},3364:function(e,t,s){"use strict";var r=s("0c70"),a=s.n(r);a.a},"3e4b":function(e,t,s){},"9ffa":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-container",style:{background:e.bgRadials,"background-color":e.bgColor}},[s("div",{staticClass:"grid"},[s("div",{staticClass:"info"},[e.hasSurged?e._e():s("div",{staticClass:"text"},[s("h1",[e._v("Looks like your wild magic is about to surge...")])]),e.hasSurged?s("div",{staticClass:"text"},[s("h3",[e._v(e._s(e.surgeRoll+1))]),s("p",[e._v(e._s(e.surgeTable[e.surgeRoll])+" ")])]):e._e()]),s("div",{staticClass:"button"},[s("div",{staticClass:"pro-button outline",on:{click:function(t){return e.surge()}}},[e._v("Surge!")])])])])},a=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pro-input-main"},[s("div",{staticClass:"pro-input-container",class:e.options.containerClass},[s("div",{staticClass:"input-holder",class:e.error&&e.entered?"error":""},[s("div",{staticClass:"placeholder",class:e.isActive?"active":""},[e._v(e._s(e.placeholderCopy))]),"number"===e.options.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"number"},domProps:{value:e.input},on:{keydown:e.handleKey,focus:function(t){e.focused=!0},blur:function(t){e.focused=!1,e.entered=!0},input:function(t){t.target.composing||(e.input=t.target.value)}}}):e._e(),"password"===e.options.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"password"},domProps:{value:e.input},on:{keydown:e.handleKey,focus:function(t){e.focused=!0},blur:function(t){e.focused=!1,e.entered=!0},input:function(t){t.target.composing||(e.input=t.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],domProps:{value:e.input},on:{keydown:e.handleKey,focus:function(t){e.focused=!0},blur:function(t){e.focused=!1,e.entered=!0},input:function(t){t.target.composing||(e.input=t.target.value)}}})])])])},i=[],o={name:"ProInput",props:{value:{required:!0},options:{default:{}}},watch:{input(e){this.$emit("input",e)},value(e){this.input=e}},data(){return{input:null,focused:!1,entered:!1}},computed:{isActive(){return this.focused||this.input},placeholderCopy(){return this.entered&&this.error?this.error:this.options.title},error(){return this.options.errorIf&&this.options.errorIf(this.input)}},methods:{handleKey(e){"Enter"===e.code&&this.options.onEnter&&this.options.onEnter()}}},l=o,h=(s("b2d9"),s("2877")),c=Object(h["a"])(l,n,i,!1,null,"5fce6f46",null),u=c.exports,d={name:"PublicHome",components:{"pro-input":u},data(){return{hasSurged:!1,rgb:["255,255,255,0.5","255,255,255,0.5","255,255,255,0.5","255,255,255,0.5"],size:["100","100","100","100"],surgeRoll:null,bgRadials:null,bgColor:null,surgeTable:["Roll on this table every round for 1 minute, ignoring duplicate rolls.","Caster and and one target of the spell switch positions after spell is cast.","Caster can see invisible creatures for 1 minute.","A horse appears nearby. It is on fire.","A small construct appears within 5 ft for one minute. It is determined to clean everything that it can","The caster grows viney plants from their armpits. These remain until shaved off","Immediately after the spell is resolved, cast fireball at 3rd level centered on self. This does not expend a spell slot.","Nonmagical weapons within 60ft of the caster turn to food for 1 minute","Immediately after the spell is resolved, cast magic missile as 5th-level spell. All of the missiles vaguley resemble cats and meow as they hit the target.","The caster breathes a 30ft cone of fire the next time they speak.","The caster's height changes by 1d10 inches. On an even number the caster grows, on an odd number they shrink","The target is cocooned in crystal, unable to act and perfectly preserved. The cocoon lasts until someone breaks it or 24 hours have passed.","Immediately after the spell is resolved, cast confusion centered on self. This does not expend a spell slot.","Immediately after the spell is resolved, cast thunder wave in a random direction. This does not expend a spell slot.","The caster regains 5 HP every round for 1 minute","Target is transported to the Ethereal Plane for 1 minute","The caster grows a long, luxurious beard made of vibrant, colorful feathers. The next time the caster sneezes, the beard explodes in a cloud of feathers.","A swarm of rats swell up from seemingly nowhere and carry the caster 30ft in random direction before disappearing from whence they came.","Immediately after the spell is resolved, cast grease centered on self. This does not expend a spell slot.","Creatures within 30ft of the caster must pass a DC 15 Strength saving throw are become restrained by sticky goop until the end of their next turn.","For 1 minute, targets have disadvantage on saving throws to resist the effects of your spells.","A mature oak sprouts in an unoccupied space within 60 ft of the caster.","The caster’s skin turns vibrant blue. This can only be removed by a remove curse spell.","The caster can only speak to animals for 24 hours. To others, the caster sounds as if he or she is making various animal sounds when talking.","A third eye grows on the caster's forehead and remains for 1 minute. While the third eye is present, the caster has advantage on Perception checks.","The caster's weight increases by 100 lbs and their movement speed is halved. After 1 minute, the caster's weight and movement return to normal.","For 1 minute, when the caster wishes to cast a spell of 1st level or higher with a casting time of 1 Action or 1 Bonus Action, they must use both their Action and Bonus Action to cast the spell.","The caster doesn't feel well. On their next turn, the caster takes no action and vomits 1d100 silver pieces.","The caster teleports up to 60 ft to unoccupied space.","The caster’s hands become covered in honey.","The caster is transported to the Astral Plane until end of their next turn.","Cabbages sprout abundantly from the ground within 30ft of the caster.","If the spell has a damage roll, deal maximum damage instead of rolling. Any saving throws caused by the spell are made with disadvantage.","The caster can mimic the target’s voice perfectly for 24 hrs","The caster's age changes by 1d10 years. If the number rolled is odd the caster becomes younger. If it is even they become older","The caster grows antlers. After 24 hours, he or she may shed them by roughly scraping them against a large, solid object.","1d6 flumphs appear for 1 minute within 60 ft of the caster. They are surprised by their appearance and generally scared.","The caster and target are flung 10 ft in opposite directions.","The caster regains 2d10 HP","Gravity reverses in a 30 ft radius, centered on the caster,  until the start of the caster's next turn","The caster becomes a potted plant until start of their next turn.","The caster is distracted by a cloud of gnats for 1 minute. During this time, he or she has disadvantage on concentration checks.","For 1 minute the caster can teleport up to 20 ft as bonus action.","The spell ricochets off of the target to random creature in 30 ft. The initial target suffers no effects from the spell.","Cast levitate on yourself without expending a spell slot.","The caster’s money changes. Copper pieces become silver pieces. Silver pieces become gold pieces. Gold pieces become copper pieces.","A unicorn appears within 5 ft of the caster. After one minute it disappears.","One of target’s eyes is replaced by a sapphire worth 500 gold pieces.","For the next minute, when the caster tries to speak, he or she instead burps pink bubbles.","Smoke fumes from the caster’s ears for the next minute.","A shimmering shield of energy envelops the caster for 1 minute. During this time, the caster has +2 AC and may not be targeted by magic missile.","The caster grows a 3ft long prehensile tail. It disappears after 1 hour.","The caster is incapable of being drunk for the next 5d6 days.","All unlocked doors/windows within in 60ft of the target fly open.","All of the caster's hair falls out. It all grows back within 24 hours.","There is a small explosing directly in front of the caster, covering his or her face in black soot.","For 1 minute any object that is not being worn or carried that the caster touches ignites in flame.","A large geyser of purple water lifts the caster 50 ft in air until start of their next turn.","The caster regains one spell slot of the lowest-level that they have expended.","A confused bear appears within 60ft of the caster. After 1 minute it disappears.","For 1 minute, the caster can only shout when speaking.","All grass within 20ft of the caster instantly sprouts to 3ft tall.","Cast fog cloud centered on self without expending a spell slot.","The caster can breathe underwater for 1 minute. However, during this time they are unable to breathe air.","Up to 3 creatures of the caster's choice within 30ft must make a DC 15 Dexterity saving throw or suffer 4d10 lightning damage.","The caster falls unconscious until the start of their next turn.","The target is frightened of the nearest creature until the end of their next turn.","If the target dies within the next minute, its ghost haunts the caster.","Every creature within 30ft of the caster becomes invisible for 1 minute or until they make an attack or cast a spell.","All creatures within 60ft of the caster must pass a DC 15 Wisdom saving throw or drop whatever they are holding.","The caster has resistance to all damage for 1 minute.","All creatures and objects within 20ft of the caster are pulled 10ft closer to him or her.","A random creature within 60ft is poisoned for 24 hours.","The caster smells like lavender for 1d6 days.","The caster glows brightly for 1 minute. Creatures within 5ft are blinded unless they avert their eyes.","The caster's clothes become uncomfortably tight.","The caster has the spell Polymorph cast on them for 1 minute. They must make a DC 13 Wisdome saving throw. On a failure they are turned in to a sheep. On a success, they instead choose the form they polymorph in to.","If the spell deals damage, the target loses a limb.","Illusory butterflies and flowers flutter around the caster for 1 min.","The caster is trapped in a large glass ball.","After the spell is cast, the caster immediately takes an additional action.","The caster’s fists become huge for 1 minute. They are considered a melee weapon with which the caster is proficient. They deal 1d8 bludgeoning damage.","All other creatures within 30ft suffer 1d10 necrotic dmg. The caster regains HP equal to the total damage caused.","For one minute a loud voice ridicules the caster at the beginning of each of their turns.","Cast mirror image without expending a spell slot.","The caster’s arms become tentacles for 1 minute.","A random creature within 60ft is the subject of the fly spell.","A large, floating eye follows caster for 1 hour.","Cast invisibility on yourself without expending a spell slot.","The caster's size decreases by 1 size category for 1 minute.","If the caster dies within 1 minute, it immediately comes back to life as per the spell reincarnate.","The caster sees everyone as a decaying corpse for 24 hours.","The caster's size increases by 1 size category for 1 minute.","All light sources within 60ft of the caster are extinguished.","You and all creatures within 30ft become vulnerable to piercing damage for 1 minute.","The caster becomes frightened of a color for 1 hour.","The caster is surrounded by faint, ethereal music for 1 minute.","The caster suffers a head cold for 24 hours.","Regain all expended Sorcery Points.","Purple Rain. A light drizzle of purple hued water drizzles down from the clouds (or ceiling) in a 100ft radius centered on the caster's position. Any allies in the area when the rain starts gain 2d6 temporary hp. The rain lasts for an hour."]}},methods:{surge(){this.hasSurged=!0,this.surgeRoll=Math.floor(Math.random()*this.surgeTable.length),this.bgColor=`rgba(${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 1)`,this.rgb.forEach((e,t)=>{this.rgb[t]=`${this.colorVal()}, ${this.colorVal()}, ${this.colorVal()}, 0.5`,this.size[t]=`${this.sizeVal()}`}),this.bgRadials=this.setBgRadials()},colorVal(){return Math.floor(255*Math.random()+1)},sizeVal(){return Math.floor(100*Math.random()+20)},setBgRadials(){let e=this.rgb,t=this.size,s=`radial-gradient(\n          circle at top left,\n          rgba(${e[0]}), \n          transparent ${t[0]}vw\n        ),\n        radial-gradient(\n          circle at top right,\n          rgba(${e[1]}), \n          transparent ${t[1]}vw\n        ),\n        radial-gradient(\n          at bottom left,\n          rgba(${e[2]}), \n          transparent ${t[2]}vw\n        ),\n        radial-gradient(\n          at bottom right,\n          rgba(${e[3]}), \n          transparent ${t[3]}vw\n        )`;return s}},computed:{}},f=d,p=(s("3364"),Object(h["a"])(f,r,a,!1,null,"2d8ccb31",null));t["default"]=p.exports},b2d9:function(e,t,s){"use strict";var r=s("3e4b"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-0b70a97a.4ab2c50e.js.map