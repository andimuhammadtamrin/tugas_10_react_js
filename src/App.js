import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import{
  Grid,
  Flag,
  Button,
  Icon,
  Divider,
  Input,
  Image,
  Header,
  Label,
  Container
}from "semantic-ui-react";

class App extends Component {
  render(){
    return (
      <div>
        <br />
        <Grid container columns={3}>
          <Grid.Column width="1" >
            <Flag name="id"/>
          </Grid.Column>
          <Grid.Column width="1">
            <Icon name="angle left" size="big" corner="bottom"/>
          </Grid.Column>
          <Grid.Column width="1">
            <Icon name="angle right" size="big"  />
          </Grid.Column>
          <Grid.Column width="11">
            <Input fluid type="text" placeholder="Search" icon={<Icon name="star"/>}  />
          </Grid.Column>
          <Grid.Column width="2">
            <Header>
              <Image circular src=" https://react.semantic-ui.com/images/avatar/large/patrick.png"/>
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal>SELAMAT DATANG !!!!</Divider>
        <br/>
        <Grid container columns={1}>
          <Grid.Column>
          <Label as="a" color='teal' tag attached="top right">SPOILER</Label>
          <br/>
          <br/>
          <br/>
          <Container textAlign="center">
            <p>
              Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen
              aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati
              akan melanjutkan ke CAS(Pengadilan Abritase Olahraga)?Suzuki,Honda,KTM,
              dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici
              Andrea Dovizioso dan Danillo Petrucci dalam balapan pertama MotoGP
              2019 di Qatar 2019 karena di anggap ilegal.Pada prosesnya Davizioso
              tampil sebagai pemenang usai mengalahkan Marc Marquez.Keempat tim
              meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan
              down force, yang membantu motor melesat di trek.Sementara Ducati bersikukuh
              bahwa komponen itu cuma untuk mendinginkan ban dan sudah disetujui
              Technical Director sebelum balapan.Pada Awalnya protes Keempat tim
              itu ditolak oleh steward MotoGP sehingga dibawa ke pengadilan Banding
              FIM,Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina
              digelar pada 29-31 Maret 2019 mendatang. Manajer umum Ducati Gigi Dall'Igna
              berkukuh tidak ada yang ilegal dengan komponen itu. Namun,seandainya
              pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan
              melanjutkan kasus ini ke CAS."Dalam federasi,derajatnya berakhir
              di Pengadilan Banding FIM.Anda harus pergi ke CAS, yang adalah pengadilan
              olah raga tapi dalam kasus ini Anda keluar dari perimeter FIM." Dall'Igna
              mengungkapkan pada MotoGP.com."Saya bahkan tidak ingin memikirkan
              sampai titik ini.Kami sangat yakin bahwa kami tidak melanggar regulasi
              kok dan yakin kami tidak melihat adanya alasan mengapa pengadilan Banding bisa memutuskan secara berbeda."
            </p>

          </Container>
          </Grid.Column>
        </Grid>
        <br/>
        <br/>
        <Grid container columns={3}>
          <Grid.Column width="6"></Grid.Column>
          <Grid.Column >
            <Button attached="left" color="teal" >+</Button>
            <Button attached="right" color="teal">Tambah Tautan Ke List</Button>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default App;
