import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const Help = (props) => {

  
  return (
    <>
<section className="inner_benner">
            <h2>Help</h2>
            <p>Home / Resources &amp; Tips / Help</p>

        </section>
        <section className="pera">
        <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper feugiat, dolor
                eros dictum nisi, vestibulum ultricies ipsum libero vel sem. Integer rutrum risus lorem, vitae ornare
                dui ullamcorper eu. Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium
                faucibus condimentum. Nam at ex metus. Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                posuere pharetra lectus, a lobortis leo congue in. Quisque ullamcorper, lorem tincidunt molestie
                sollicitudin, nibh leo viverra enim, quis commodo metus nulla vitae metus. Etiam elementum tellus sit
                amet dolor pharetra consectetur. Etiam gravida lobortis dapibus. Nam sagittis orci eros, at eleifend
                ante tincidunt vitae. Praesent accumsan iaculis augue, at gravida sapien. Quisque pretium ex at urna
                luctus, non vehicula nisi placerat. Aenean lobortis non turpis at rutrum. Mauris posuere aliquet tellus,
                pharetra pharetra nunc. Pellentesque eu suscipit ante.
            </p>
            <p>
                Mauris ac dui ac erat commodo scelerisque eleifend a odio. Morbi eget est scelerisque, sollicitudin eros
                porttitor, dictum eros. Proin at nulla lacus. Duis eget lorem tincidunt, pulvinar enim et, rhoncus
                lectus. Aenean at tincidunt risus, eu pellentesque ipsum. Praesent nec orci purus. Nunc vitae aliquet
                libero. In vitae auctor lorem, id egestas nunc. Cras consectetur augue ut nunc volutpat efficitur sit
                amet id felis. Maecenas ut tempor diam. Sed ut massa eu tellus gravida aliquam. Curabitur semper non
                risus nec maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Curabitur faucibus sagittis massa sit amet tincidunt. Proin non tempus mauris. Suspendisse tempor
                semper euismod.
            </p>
            <p>Suspendisse eleifend malesuada diam. Pellentesque enim diam, sagittis in tincidunt sit amet, ultricies
                tempus mi. Sed pellentesque sed ante sit amet tristique. Fusce tincidunt tincidunt erat eget varius.
                Phasellus quis enim ac mi convallis porta. Morbi aliquam nec est et vehicula. Phasellus sed odio non
                justo mollis congue. Ut congue est quis ex mollis rutrum. Mauris laoreet commodo vulputate. Mauris
                suscipit feugiat nisi. Praesent quis fermentum dui. Duis sapien nulla, consectetur in malesuada a,
                dignissim quis justo. Pellentesque eleifend neque ac aliquam volutpat. Vivamus euismod sagittis
                vulputate.</p>
            <p>
                Fusce sit amet dui ipsum. Nulla congue dolor nec libero accumsan venenatis. Aliquam sit amet ornare
                libero. Praesent pulvinar convallis magna, ac bibendum lorem. Nullam sed massa vel metus lacinia
                dignissim. Mauris ac suscipit tortor. Duis convallis lacus vel sem tincidunt molestie. Ut elementum eu
                erat nec mattis. Cras ut lobortis lorem, eu pretium est. Nam et massa sit amet nunc eleifend ornare vel
                a ligula. Sed vitae auctor justo, sed bibendum augue. Vestibulum eleifend, nibh in pharetra vestibulum,
                felis odio molestie ante, ut vestibulum tortor ex et velit. Mauris finibus nisl purus, eu fermentum
                massa finibus eu. Pellentesque a interdum tortor.
            </p>
            <p>Etiam sodales quam ipsum, vel interdum felis sollicitudin in. Quisque maximus neque odio, nec lacinia leo
                efficitur non. Suspendisse non consequat erat, id consectetur eros. Nulla tincidunt, lacus nec ultricies
                luctus, diam mi porttitor erat, in lobortis tortor ex sed nisi. Pellentesque auctor odio ut commodo
                mattis. Nulla facilisi. Maecenas eu augue fermentum, faucibus odio nec, lacinia erat. Duis vitae maximus
                leo, et facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper feugiat, dolor
                eros dictum nisi, vestibulum ultricies ipsum libero vel sem. Integer rutrum risus lorem, vitae ornare
                dui ullamcorper eu. Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium
                faucibus condimentum. Nam at ex metus. Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                posuere pharetra lectus, a lobortis leo congue in. Quisque ullamcorper, lorem tincidunt molestie
                sollicitudin, nibh leo viverra enim, quis commodo metus nulla vitae metus. Etiam elementum tellus sit
                amet dolor pharetra consectetur. Etiam gravida lobortis dapibus. Nam sagittis orci eros, at eleifend
                ante tincidunt vitae. Praesent accumsan iaculis augue, at gravida sapien. Quisque pretium ex at urna
                luctus, non vehicula nisi placerat. Aenean lobortis non turpis at rutrum. Mauris posuere aliquet tellus,
                pharetra pharetra nunc. Pellentesque eu suscipit ante.
            </p>
            <p>
                Mauris ac dui ac erat commodo scelerisque eleifend a odio. Morbi eget est scelerisque, sollicitudin eros
                porttitor, dictum eros. Proin at nulla lacus. Duis eget lorem tincidunt, pulvinar enim et, rhoncus
                lectus. Aenean at tincidunt risus, eu pellentesque ipsum. Praesent nec orci purus. Nunc vitae aliquet
                libero. In vitae auctor lorem, id egestas nunc. Cras consectetur augue ut nunc volutpat efficitur sit
                amet id felis. Maecenas ut tempor diam. Sed ut massa eu tellus gravida aliquam. Curabitur semper non
                risus nec maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Curabitur faucibus sagittis massa sit amet tincidunt. Proin non tempus mauris. Suspendisse tempor
                semper euismod.
            </p>
            <p>Suspendisse eleifend malesuada diam. Pellentesque enim diam, sagittis in tincidunt sit amet, ultricies
                tempus mi. Sed pellentesque sed ante sit amet tristique. Fusce tincidunt tincidunt erat eget varius.
                Phasellus quis enim ac mi convallis porta. Morbi aliquam nec est et vehicula. Phasellus sed odio non
                justo mollis congue. Ut congue est quis ex mollis rutrum. Mauris laoreet commodo vulputate. Mauris
                suscipit feugiat nisi. Praesent quis fermentum dui. Duis sapien nulla, consectetur in malesuada a,
                dignissim quis justo. Pellentesque eleifend neque ac aliquam volutpat. Vivamus euismod sagittis
                vulputate.</p>
            <p>
                Fusce sit amet dui ipsum. Nulla congue dolor nec libero accumsan venenatis. Aliquam sit amet ornare
                libero. Praesent pulvinar convallis magna, ac bibendum lorem. Nullam sed massa vel metus lacinia
                dignissim. Mauris ac suscipit tortor. Duis convallis lacus vel sem tincidunt molestie. Ut elementum eu
                erat nec mattis. Cras ut lobortis lorem, eu pretium est. Nam et massa sit amet nunc eleifend ornare vel
                a ligula. Sed vitae auctor justo, sed bibendum augue. Vestibulum eleifend, nibh in pharetra vestibulum,
                felis odio molestie ante, ut vestibulum tortor ex et velit. Mauris finibus nisl purus, eu fermentum
                massa finibus eu. Pellentesque a interdum tortor.
            </p>
            <p>Etiam sodales quam ipsum, vel interdum felis sollicitudin in. Quisque maximus neque odio, nec lacinia leo
                efficitur non. Suspendisse non consequat erat, id consectetur eros. Nulla tincidunt, lacus nec ultricies
                luctus, diam mi porttitor erat, in lobortis tortor ex sed nisi. Pellentesque auctor odio ut commodo
                mattis. Nulla facilisi. Maecenas eu augue fermentum, faucibus odio nec, lacinia erat. Duis vitae maximus
                leo, et facilisis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
            </p>
        </div>
    </section>
    

    </>
  );
}
export default Help;

